output "s3_website_url" {
  description = "URL pública de tu app React en S3"
  value       = aws_s3_bucket.react_hosting.website_endpoint
}
