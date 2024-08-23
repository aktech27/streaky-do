import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import supabase from '../../utils/supabase';
import { useContext } from 'react';
import { AuthContext } from '../../context';

const SignUpForm = ({ setLoading, setToast }) => {
  const { dispatch } = useContext(AuthContext);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    console.log(e.target.name.value, e.target.email.value, e.target.password.value);
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: e.target.email.value,
      password: e.target.password.value,
    });
    setLoading(false);
    if (error) {
      setToast({ state: true, message: error.message, severity: 'error' });
    } else if (data) {
      console.log(data);
      dispatch({ type: 'LOGIN', payload: data.user });
      setToast({ state: true, message: 'Registration Successful', severity: 'success' });
    }
  };

  return (
    <Grid item xs={12} sm={8} md={6}>
      <Box
        sx={{
          my: 4,
          mx: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography component="h1" variant="h4" mb={2}>
          Create an account
        </Typography>
        <Typography component="h4" variant="caption" mb={3}>
          Already have an account?  <Link href="/sign-in" variant="caption">Login</Link>
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleFormSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Your Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Create Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, p: 1.5 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Grid >
  );
};

export default SignUpForm;