import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const SignInForm = () => {
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
        <Box component="form" noValidate sx={{ mt: 1 }}>
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