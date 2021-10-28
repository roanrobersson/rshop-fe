import logo from 'core/assets/images/logo_white.webp';
import logoMobile from 'core/assets/images/logo_white_mobile.webp';
import { ImageLink } from 'core/components';

type MainNavbarLogoProps = {
  href: string;
  isMobile: boolean;
};

const MainNavbarLogo = ({ href, isMobile }: MainNavbarLogoProps) => (
  <>
    {isMobile ? (
      <ImageLink href={href} src={logoMobile} alt='logo' width={177} height={28} />
    ) : (
      <ImageLink href={href} src={logo} alt='logo' width={177} height={78} />
    )}
  </>
);

export default MainNavbarLogo;
