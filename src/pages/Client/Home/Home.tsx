import { Box, Typography } from '@mui/material';
import logoComplete from 'core/assets/images/logo_complete.webp';
import exclamationHeart from 'core/assets/svgs/exclamation_heart.svg';
import { Image } from 'core/components';
import { SPACE_CHAR } from 'core/lib/constants';

const Home = (): JSX.Element => (
  <Box sx={{ display: 'flex', pt: 6 }}>
    <Box sx={{ mt: 10, mr: 7 }}>
      <Image src={logoComplete} alt='logo' width={820} />
    </Box>
    <Box sx={{ height: 300 }}>
      <Typography variant='h2' sx={{ fontWeight: 700 }}>
        Últimas novidades selecionadas para você{SPACE_CHAR}
        <Image src={exclamationHeart} alt='exclamation' width={50} />
      </Typography>
    </Box>
  </Box>
);

export default Home;
