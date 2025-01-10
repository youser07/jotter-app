import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", email, password);
    setIsLoggedIn(true); // Mark as logged in
    navigate('/'); // Redirect to homepage after successful login
  };

  const handleGuestLogin = () => {
    console.log("Logging in as guest");
    setIsLoggedIn(true); // Mark as logged in
    navigate('/'); // Redirect to homepage
  };

  return (
    <Container maxWidth="xs" className={styles.loginPage}> {/* Added loginPage class here */}
      <Box className={styles.container}>
        <Typography variant="h4" className={styles.title}>
          Welcome Back to Jotter
        </Typography>
        <form onSubmit={handleSubmit} className={styles.form}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.inputField}
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
            className={styles.inputField}
          />
          <Button
            type="submit"
            variant="contained"
            className={styles.submitButton}
          >
            Log In
          </Button>
        </form>
        <Button
          variant="outlined"
          className={styles.guestButton}
          onClick={handleGuestLogin}
        >
          Continue as Guest
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
