import LoginForm from 'modules/auth/components/LoginForm';
import { Box } from '@mui/system';

const Login = (): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <LoginForm />
    </Box>
  );
};

export default Login;
