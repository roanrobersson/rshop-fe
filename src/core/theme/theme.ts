import { createTheme } from '@mui/material/styles';
import type {} from '@mui/lab/themeAugmentation';
import palette from './palette';
import typography from './typography';
import components from './components';

const customThemeFragment = {
  palette: palette,
  typography: typography,
  components: components,
};

export default createTheme(customThemeFragment);
