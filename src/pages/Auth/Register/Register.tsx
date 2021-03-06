import RegisterForm from 'modules/common/auth/components/RegisterForm';
import { Box } from '@mui/system';
import useRegister from 'modules/common/auth/hooks/useRegister';
import { RegisterFormData } from 'modules/common/auth/types';
import { useNavigate } from 'react-router-dom';
import { AUTH_LOGIN } from 'core/configs/routeKeys';

const Register = (): JSX.Element => {
  const { isLoading, error, handleSubmit, formControl } = useRegister();
  const navigate = useNavigate();

  const onSubmit = (data: RegisterFormData) => {};

  const handleCancelClick = () => {
    navigate(AUTH_LOGIN);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <RegisterForm
        control={formControl}
        isLoading={isLoading}
        registerError={error}
        onSubmit={handleSubmit(onSubmit)}
        onCancelClick={handleCancelClick}
      />
    </Box>
  );
};

export default Register;
