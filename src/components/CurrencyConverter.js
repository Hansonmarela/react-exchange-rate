// src/components/CurrencyConverter.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TextField, Button, Typography, Box, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0a3d91;
  color: white;
  font-size: 24px;
  font-family: 'Segoe UI';
  font-weight: bold;
  height: 60px;
  padding: 0 20px;
`;

const LogoutButton = styled.button`
  background-color: #ff4b5c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;

  &:hover {
    background-color: #ff6b7c;
  }
`;

const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
  background-color: #f9f9f9;
`;

const BoxStyled = styled(Box)`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  width: 100%;
`;

const ConvertedAmount = styled(Typography)`
  margin-top: 3rem;
  font-size: 24px;
  font-weight: bold;
`;

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('GHS');
  const [toCurrency, setToCurrency] = useState('USD');
  const [exchangeRates, setExchangeRates] = useState({});
  const [convertedAmount, setConvertedAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/GHS');
        setExchangeRates(response.data.rates);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };
    fetchExchangeRates();
  }, []);

  const handleConvert = () => {
    if (amount && fromCurrency && toCurrency && exchangeRates) {
      const rate = exchangeRates[toCurrency];
      const result = amount * rate;
      setConvertedAmount(result.toFixed(2));
    }
  };

  const handleLogout = () => {
    // Add logout logic here
    console.log('User logged out');
    navigate('/login');
  };

  return (
    <>
      <Header>
        Excurrency
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Header>
      <ContainerStyled>
        <BoxStyled>
          <Typography variant="h4" component="h2" gutterBottom>
            Currency Converter
          </Typography>
          <TextField
            type="number"
            label="Amount"
            fullWidth
            margin="normal"
            variant="outlined"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel>From Currency</InputLabel>
            <Select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              label="From Currency"
            >
              {Object.keys(exchangeRates).map((currency) => (
                <MenuItem key={currency} value={currency}>
                  {currency}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel>To Currency</InputLabel>
            <Select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              label="To Currency"
            >
              {Object.keys(exchangeRates).map((currency) => (
                <MenuItem key={currency} value={currency}>
                  {currency}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }} onClick={handleConvert}>
            Convert
          </Button>
          <ConvertedAmount variant="h5" component="p">
            Converted Amount: {convertedAmount}
          </ConvertedAmount>
        </BoxStyled>
      </ContainerStyled>
    </>
  );
};

export default CurrencyConverter;
