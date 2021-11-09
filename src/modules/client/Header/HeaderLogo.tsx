import logo from 'core/assets/images/logo_white.webp';
import logoMobile from 'core/assets/images/logo_white_mobile.webp';
import { ImageLink } from 'core/components';

type HeaderLogoProps = {
  href: string;
  isMobile: boolean;
};

const HeaderLogo = ({ href, isMobile }: HeaderLogoProps): JSX.Element => (
  <>
    {isMobile ? (
      <ImageLink href={href} src={logoMobile} alt='logo' width={177} height={28} />
    ) : (
      <ImageLink href={href} src={logo} alt='logo' width={177} height={78} />
    )}
  </>
);

export default HeaderLogo;
