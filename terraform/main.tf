provider "aws" {
  region = var.region
}

# Bucket S3 para alojar la app React
resource "aws_s3_bucket" "react_hosting" {
  bucket = var.bucket_name

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  force_destroy = true
}

# Hacer el bucket público
resource "aws_s3_bucket_policy" "public_policy" {
  bucket = aws_s3_bucket.react_hosting.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid       = "PublicReadGetObject",
        Effect    = "Allow",
        Principal = "*",
        Action    = "s3:GetObject",
        Resource  = "${aws_s3_bucket.react_hosting.arn}/*"
      }
    ]
  })
}

# Permitir acceso público total (ACLs habilitadas)
resource "aws_s3_bucket_public_access_block" "allow_public" {
  bucket = aws_s3_bucket.react_hosting.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# Subida de archivos compilados desde React
resource "aws_s3_object" "react_files" {
  for_each = fileset("${path.module}/../frontend-bi/build", "**/*")

  bucket = aws_s3_bucket.react_hosting.id
  key    = each.value
  source = "${path.module}/../frontend-bi/build/${each.value}"
  etag   = filemd5("${path.module}/../frontend-bi/build/${each.value}")
  content_type = lookup(
    {
      html = "text/html"
      js   = "application/javascript"
      css  = "text/css"
      png  = "image/png"
      jpg  = "image/jpeg"
      svg  = "image/svg+xml"
      json = "application/json"
      ico  = "image/x-icon"
    },
    split(".", each.value)[length(split(".", each.value)) - 1],
    "text/plain"
  )
}
