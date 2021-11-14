import { Box, SxProps } from '@mui/system';
import { CircularProgress } from '@mui/material';

type LoadingProps = {
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';
  disableShrink?: boolean;
  noPadding?: boolean;
  thickness?: number;
  size?: number | string;
  sx?: SxProps;
  value?: number;
  variant?: 'determinate' | 'indeterminate';
};

const Loading = ({
  color,
  disableShrink,
  noPadding = false,
  thickness,
  size,
  sx,
  value,
  variant,
}: LoadingProps): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', ...(!noPadding && { pt: 10 }) }}>
      <CircularProgress
        color={color}
        disableShrink={disableShrink}
        thickness={thickness}
        size={size}
        sx={{ ...sx }}
        value={value}
        variant={variant}
      />
    </Box>
  );
};

export default Loading;
