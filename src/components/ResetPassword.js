// src/components/ResetPassword.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';

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

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
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

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Add password reset logic here
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // Redirect to password reset success page
    navigate('/password-reset-success');
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <Container>
      <LeftPanel>
        <Logo>Excurrency</Logo>
      </LeftPanel>
      <RightPanel>
        <FormContainer>
          <Title>Reset Password</Title>
          <Subtitle>Enter your new password</Subtitle>
          <form onSubmit={handleResetPassword}>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <Button type="submit">Reset Password</Button>
            <Subtitle>Remembered your password? <Link to="/login">Back to login</Link></Subtitle>
          </form>
        </FormContainer>
      </RightPanel>
    </Container>
  );
};

export default ResetPassword;
