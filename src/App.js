// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import PasswordResetSuccess from './components/PasswordResetSuccess';
import ResetPassword from './components/ResetPassword';
import CurrencyConverter from './components/CurrencyConverter';
import OtpCode from './components/OtpCode';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/otp-code" element={<OtpCode />} />
        <Route path="/password-reset-success" element={<PasswordResetSuccess />} />
        <Route path="/currency-converter" element={<CurrencyConverter />} />
      </Routes>
    </Router>
  );
}

export default App;
