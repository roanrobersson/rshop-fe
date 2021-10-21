import { Link } from '@mui/material';
import { Image } from 'core/components';

type ImageLinkProps = {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

const ImageLink = ({ href, src, alt, width, height }: ImageLinkProps) => {
  return (
    <Link href={href} underline='none' color='inherit'>
      <Image src={src} alt={alt} width={width} height={height} />
    </Link>
  );
};

export default ImageLink;
