import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  TextField,
  Button,
  Link,
  Typography,
} from '@mui/material';
import styles from './LoginForm.module.css';
import httpService from '../../Services/httpService';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch(httpService.getUrl('api/players/login'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();

    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('id', data.id);
      navigate('/');
    } else {
      alert('Please check your username and password');
    }
  }
  return (
    <Container fixed className={styles.container}>
      <Typography variant='h4' align='center' id={styles.title_colors}>
        <b>Welcome to Quizzi!</b>
        <br />
        <span className={styles.subtitle}>where Learning is FUN</span>
      </Typography>
      <Typography variant='h3' component='h3' align='center' id={styles.login_styling} >
        Login
      </Typography>

      <form onSubmit={loginUser} style={{ textAlign: 'center' }}>
        <TextField id={styles.textfield} color='secondary' label='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required
          fullWidth margin='normal' autoComplete='email' autoFocus />
        <TextField id={styles.textfield1} color='secondary' label='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}
          required fullWidth margin='normal'/>
        <Button type='submit' id={styles.signInButton} variant='contained' color='secondary' >
          SIGN IN
        </Button>
        <Typography id={styles.ask} display='block' variant='subtitle2' align='center' >
          Don't have an account?
        </Typography>
        <Link id={styles.regLink} href='/register' variant='body2'>
          Create Account
        </Link>
      </form>
    </Container>
  );
};

export default LoginForm;
