import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = ({ status }) => {
  return (
    <Backdrop open={status} sx={{ backgroundColor: 'rgba(0,0,0,0.75)', zIndex: 10 }}>
      <CircularProgress size={60} thickness={5} />
    </Backdrop>
  );
};

export default Loading;