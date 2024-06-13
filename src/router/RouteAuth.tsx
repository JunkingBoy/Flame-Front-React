import React from 'react'
import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const Auth: React.FC<Props> = ({ children }) => {
  let token = localStorage.getItem('token');

  if (token) {
    return (<>{children}</>);
  } else {
    return <Navigate to="/" />
  }
}

export default Auth;
