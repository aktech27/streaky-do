import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Toast = ({ toast, setToast }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setToast({ state: false, severity: '', message: '' });
  };

  return (
    <Snackbar
      open={toast.state}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <Alert
        onClose={handleClose}
        severity={toast.severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {toast.message}
      </Alert>
    </Snackbar>
  );
};


export default Toast;
