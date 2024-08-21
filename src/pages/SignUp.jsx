import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SignUpAside from '../components/SignUp/SignUpAside';
import SignUpForm from '../components/SignUp/SignUpForm';
import { useState } from 'react';
import Loading from '../components/General/Loading';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {loading ? <Loading status={loading} /> : null}
      <Grid container component="main" sx={{
        height: '100vh',
        backgroundColor: '#9D2D7D',
      }}>
        <CssBaseline />
        <Grid item container component={Paper} xs={12} sm={11} lg={9} mx={'auto'} my={isXS ? 0 : 2} sx={{ backgroundColor: '#2b2738' }}>
          <SignUpAside />
          <SignUpForm setLoading={setLoading} />
        </Grid>
      </Grid>
    </>
  );
};

export default SignUp;