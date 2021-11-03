import { Box, Typography } from '@mui/material';

const NotFound = (): JSX.Element => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      pt: 20,
      pb: 40,
    }}
  >
    <Typography variant='h2'>Erro 404</Typography>
    <Typography variant='h2'>Essa página não existe :(</Typography>
  </Box>
);

export default NotFound;
