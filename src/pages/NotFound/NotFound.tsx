import { Container, Box, Typography } from '@mui/material';

const NotFound = () => (
  <Container sx={{ pt: 20, pb: 20 }}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant='h2'>Erro 404</Typography>
      <Typography variant='h2'>Essa página não existe :(</Typography>
    </Box>
  </Container>
);

export default NotFound;
