// src/components/PasswordResetSuccess.js

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #e0e8f9;
`;

const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d0d8f8;
`;

const Logo = styled.div`
  font-size: 36px;
  font-family: 'Segoe UI';
  font-weight: bold;
  color: #0a3d91;
`;

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  font-family: 'Segoe UI';
  color: #0a3d91;
  margin-bottom: 10px;
  align-items: center;
`;

const Subtitle = styled.p`
  margin-bottom: 30px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 20px 0;
  background-color: #0a3d91;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  align-items: center;

  &:hover {
    background-color: #055ab4;
  }
`;

const PasswordResetSuccess = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <Container>
      <LeftPanel>
        <Logo>Excurrency</Logo>
      </LeftPanel>
      <RightPanel>
        <FormContainer>
          <Title>Password Reset Successfully</Title>
          <Subtitle>Your password has been successfully reset. You can now log in with your new password.</Subtitle>
          <Button onClick={handleLoginRedirect}>Login</Button>
        </FormContainer>
      </RightPanel>
    </Container>
  );
};

export default PasswordResetSuccess;
