import logoMobile from 'core/assets/images/logo_white_mobile.webp';
import { ImageLink } from 'core/components';

type MainNavbarLogoProps = {
  href: string;
  isMobile: boolean;
};

const MainNavbarLogo = ({ href, isMobile }: MainNavbarLogoProps) => (
  <ImageLink href={href} src={logoMobile} alt='logo' width={177} height={28} />
);

export default MainNavbarLogo;
