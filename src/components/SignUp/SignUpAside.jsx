import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const SignUpAside = () => {
  return (
    <Grid item xs={false} sm={4} md={6}>
      <Box
        component={'div'}
        m={1}
        sx={{
          width: 'calc(100% - 16px)',
          height: 'calc(100% - 16px)',
          borderRadius: '4px',
          background: 'linear-gradient(120deg, rgba(114,42,230,1) 0%, rgba(228,181,203,1) 100%)',
        }}
      />
    </Grid>
  );
};

export default SignUpAside;