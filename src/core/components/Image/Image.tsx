import { styled } from '@mui/material/styles';
import { unstable_styleFunctionSx, SxProps } from '@mui/system';

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height?: number;
  sx?: SxProps;
};

const StyledImg = styled('img')<ImageProps>(unstable_styleFunctionSx as any);

const Image = ({ src, alt, width, height, sx }: ImageProps) => (
  <StyledImg src={src} alt={alt} width={width} height={height} sx={sx} />
);

export default Image;
