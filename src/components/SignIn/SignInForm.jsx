import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import supabase from '../../utils/supabase';

const SignInForm = ({ setLoading, setToast }) => {
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    console.log(e.target.email.value, e.target.password.value);
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: e.target.email.value,
      password: e.target.password.value,
    });
    setLoading(false);
    if (error) {
      setToast({ state: true, message: error.message, severity: 'error' });
    } else if (data) {
      setToast({ state: true, message: 'Login Successful', severity: 'success' });
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
          Login to account
        </Typography>
        <Typography component="h4" variant="caption" mb={3}>
          Don&apos;t have an account?  <Link href="/sign-up" variant="caption">Register</Link>
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleFormSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
            Sign In
          </Button>
        </Box>
      </Box>
    </Grid >
  );
};

export default SignInForm;