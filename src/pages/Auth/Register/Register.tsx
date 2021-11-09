import RegisterForm from 'modules/common/auth/components/RegisterForm';
import { Box } from '@mui/system';

const Register = (): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <RegisterForm />
    </Box>
  );
};

export default Register;
