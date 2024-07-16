import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

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

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const GoogleButton = styled(Button)`
  background-color: #ffffff;
  color: #000000;
  align-items: center;
  border: 1px solid #ccc;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SignUp = () => {
  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Handle account creation logic here
    console.log('Account created');
    // Navigate to the Currency Converter page after account creation
    navigate('/currency-converter');
  };

  const handleGoogleSignUp = () => {
    // Handle Google sign up logic here
    console.log('Google sign up clicked');
    // Navigate to the Currency Converter page after Google sign up
    navigate('/currency-converter');
  };

  return (
    <Container>
      <LeftPanel>
        <Logo>Excurrency</Logo>
      </LeftPanel>
      <RightPanel>
        <FormContainer>
          <Title>Sign up</Title>
          <Subtitle>Welcome to <strong>Excurrency</strong></Subtitle>
          <form onSubmit={handleCreateAccount}>
            <Input type="text" placeholder="First Name" required />
            <Input type="text" placeholder="Last Name" required />
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <CheckboxContainer>
              <Checkbox type="checkbox" required />
              <span>I agree to Excurrency <Link to="/terms">Terms of service</Link> and <Link to="/privacy">Privacy policy</Link></span>
            </CheckboxContainer>
            <Button type="submit">Create Account</Button>
            <Subtitle>OR</Subtitle>
            <GoogleButton type="button" onClick={handleGoogleSignUp}>
              <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" />
              Continue with Google
            </GoogleButton>
            <Subtitle>Have an Account? <Link to="/login">Sign in</Link></Subtitle>
          </form>
        </FormContainer>
      </RightPanel>
    </Container>
  );
};

export default SignUp;
