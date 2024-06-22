import React from 'react';
import AuthContent from '../components/Auth/AuthContent';

function SignupScreen() {
  const authenticateHandler = () => {};
  return <AuthContent isLogin={false} onAuthenticate={authenticateHandler} />;
}

export default SignupScreen;
