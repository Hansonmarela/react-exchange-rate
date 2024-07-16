// src/components/OtpCode.js

import React, { useState } from 'react';
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

const LinkStyled = styled.a`
  color: #00a2ff;
  cursor: pointer;
  text-decoration: none;
`;

const OtpCode = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    // Handle OTP verification logic here
    console.log('OTP:', otp);
    // Navigate to reset password page after successful OTP verification
    navigate('/reset-password');
  };

  return (
    <Container>
      <LeftPanel>
        <Logo>Excurrency</Logo>
      </LeftPanel>
      <RightPanel>
        <FormContainer>
          <Title>OTP CODE</Title>
          <Subtitle>For your two-factor authentication, a code has been sent to your email</Subtitle>
          <form onSubmit={handleContinue}>
            <Input
              type="text"
              placeholder="OTP Code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <Button type="submit">Continue</Button>
            <Subtitle>Remembered your password? <LinkStyled href="/login">Back to login</LinkStyled></Subtitle>
          </form>
        </FormContainer>
      </RightPanel>
    </Container>
  );
};

export default OtpCode;
