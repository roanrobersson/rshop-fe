import { styled } from '@mui/material/styles';

export const StyledImg = styled('img')(({ theme }) => ({
  display: 'block',
}));

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height?: number;
};

const Image = ({ src, alt, width, height }: ImageProps) => {
  return <StyledImg src={src} alt={alt} width={width} height={height} />;
};

export default Image;
