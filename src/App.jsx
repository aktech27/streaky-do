import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from './utils/theme';
import { AuthProvider } from './context';

const App = () => {

  return (
    <ThemeProvider theme={customTheme}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
