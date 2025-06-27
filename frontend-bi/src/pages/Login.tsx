import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Use-Cases-BG?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&qlt=99&fit=constrain')`,
      }}
    >
      <LoginForm />
    </div>
  );
};

export default Login;
