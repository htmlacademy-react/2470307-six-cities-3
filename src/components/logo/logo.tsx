import { Link } from 'react-router-dom';
import { AppRoute, LOGO_DIMENSIONS } from '../../constants.ts';

type LogoProps = {
  type: 'header' | 'footer';
};

function Logo({ type }: LogoProps): JSX.Element {
  const linkClassName = `${type}__logo-link`;
  const imgClassName = `${type}__logo`;
  const { width, height } = LOGO_DIMENSIONS[type];

  return (
    <Link className={linkClassName} to={AppRoute.Main}>
      <img className={imgClassName} src="img/logo.svg" alt="6 cities logo" width={width} height={height} />
    </Link>
  );
}

export { Logo };
