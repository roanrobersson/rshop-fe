import { Link, LinkProps, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledLink = styled((props: LinkProps) => (
  <Link
    color='inherit'
    sx={{
      display: { xs: 'none', sm: 'block' },
      mr: 3,
      fontWeight: 700,
    }}
    underline='none'
    {...props}
  />
))(({ theme }) => ({
  '&:hover': {
    color: theme.palette.primary.light,
  },
}));

export const LinksWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  flexGrow: 1,
  flexBasis: '0%',
  flexWrap: 'wrap',
}));

export const ButtonsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
  justifyContent: 'flex-end',
  flexGrow: 1,
  flexBasis: '0%',
}));
