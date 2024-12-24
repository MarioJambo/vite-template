import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/components/Login/Index';
import Reset from '../src/components/ResetPass/Index';
import Forgot from '../src/components/ForgotPass/ForgotPassword'
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router>
        <Routes>

          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path='/' element={<Forgot />} /> */}
          <Route path="/" element={<Reset />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}
