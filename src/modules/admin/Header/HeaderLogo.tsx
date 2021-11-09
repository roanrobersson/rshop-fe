import logoMobile from 'core/assets/images/logo_white_mobile.webp';
import { ImageLink } from 'core/components';

type HeaderLogoProps = {
  href: string;
  isMobile: boolean;
};

const HeaderLogo = ({ href, isMobile }: HeaderLogoProps): JSX.Element => (
  <ImageLink href={href} src={logoMobile} alt='logo' width={177} height={28} />
);

export default HeaderLogo;
