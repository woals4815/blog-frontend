import React from 'react';
import AuthTemplate from '../components/auth/Authtemplate';
import RegisterForm from '../containers/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  )
};

export default RegisterPage;
