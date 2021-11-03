import { Image, Link } from 'core/components';

type ImageLinkProps = {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  external?: boolean;
};

const ImageLink = ({
  href,
  src,
  alt,
  width,
  height,
  external = false,
}: ImageLinkProps): JSX.Element => (
  <Link external={external} href={href}>
    <Image src={src} alt={alt} width={width} height={height} />
  </Link>
);

export default ImageLink;
