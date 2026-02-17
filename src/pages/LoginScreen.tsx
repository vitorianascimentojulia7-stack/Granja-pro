import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;  

const Input = styled.input` 
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
`;  

const Button = styled.button` 
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;

  &:hover { 
    background-color: #0056b3; 
  }
`;  

const LoginScreen = () => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => { 
    // Handle login authentication
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return ( 
    <Container> 
      <h1>Login</h1> 
      <Input 
        type='email' 
        placeholder='Email' 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      /> 
      <Input 
        type='password' 
        placeholder='Password' 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      /> 
      <Button onClick={handleLogin}>Login</Button> 
    </Container> 
  );
};

export default LoginScreen;