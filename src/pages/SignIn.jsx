import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SignInAside from '../components/SignIn/SignInAside';
import SignInForm from '../components/SignIn/SignInForm';

const SignIn = () => {
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container component="main" sx={{
      height: '100vh',
      backgroundColor: '#9D2D7D',
    }}>
      <CssBaseline />
      <Grid item container component={Paper} xs={12} sm={11} lg={9} mx={'auto'} my={isXS ? 0 : 2} sx={{ backgroundColor: '#2b2738' }}>
        <SignInForm />
        <SignInAside />
      </Grid>
    </Grid>
  );
};

export default SignIn;