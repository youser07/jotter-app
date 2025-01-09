import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", email, password);
    setIsLoggedIn(true);  // Mark as logged in
    navigate('/'); // Redirect to homepage after successful login
  };

  const handleGuestLogin = () => {
    console.log("Logging in as guest");
    setIsLoggedIn(true); // Mark as logged in
    navigate('/'); // Redirect to homepage
  };

  // Inline styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f6f9',
    borderRadius: '8px',
    padding: '40px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto',
  };

  const titleStyle = {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '30px',
    textAlign: 'center',
  };

  const inputFieldStyle = {
    margin: '10px 0',
    backgroundColor: '#ffffff',
  };

  const submitButtonStyle = {
    marginTop: '20px',
    backgroundColor: '#5c6bc0',
    '&:hover': {
      backgroundColor: '#3f51b5',
    },
  };

  const guestButtonStyle = {
    backgroundColor: '#b0bec5',
    color: 'black',
    marginTop: '20px',
    '&:hover': {
      backgroundColor: '#90a4ae',
    },
  };

  return (
    <Container maxWidth="xs">
      <Box style={containerStyle}>
        <Typography variant="h4" style={titleStyle}>
          Welcome Back to Jotter
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputFieldStyle}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputFieldStyle}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={submitButtonStyle}
          >
            Log In
          </Button>
        </form>

        <Button
          variant="outlined"
          fullWidth
          style={guestButtonStyle}
          onClick={handleGuestLogin}
        >
          Continue as Guest
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
