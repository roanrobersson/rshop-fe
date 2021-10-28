import { Box, Typography, IconButton, Link, Container, Divider } from '@mui/material';
import { Image } from 'core/components';
import logo from 'core/assets/images/logo_white.webp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { INSTAGRAM_URL, WHATSAPP_URL } from 'core/configs/env';

const Footer = () => (
  <Box
    sx={{
      backgroundColor: (theme) => theme.palette.grey[300],
      color: (theme) => theme.palette.grey[500],
      py: 4,
    }}
  >
    <Container maxWidth='lg' sx={{ position: 'relative' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Image src={logo} alt='logo' width={300} />
      </Box>

      <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
        <IconButton
          component={Link}
          href={WHATSAPP_URL}
          size='large'
          sx={{ flexShrink: 0, mr: { xs: 1, lg: 2 }, color: 'primary.main' }}
        >
          <WhatsAppIcon fontSize='large' />
        </IconButton>

        <IconButton
          component={Link}
          href={INSTAGRAM_URL}
          size='large'
          sx={{ flexShrink: 0, mr: { xs: 1, lg: 2 }, color: 'primary.main' }}
        >
          <InstagramIcon fontSize='large' />
        </IconButton>
      </Box>

      <Typography variant={'h5'} sx={{ textAlign: 'center', mb: 4 }}>
        CNPJ: 00.5454.78.7897-54 / Inscrição estadual: 454.7878.965.445 / Endereço Avenida Pedro
        Alvares Cabral, 450 - Passo Fundo, RS
      </Typography>
    </Container>

    <Divider sx={{ mb: 2 }} />

    <Box>
      <Typography variant={'h5'} sx={{ textAlign: 'center' }}>
        © 2021 Suelen Moreira
      </Typography>
    </Box>
  </Box>
);

export default Footer;
