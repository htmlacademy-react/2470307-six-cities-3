import { Link } from 'react-router-dom';
import { HeaderLogo } from '../logo/logo.tsx';
import { AppRoute } from '../../constants.ts';
import { useAppSelector } from '../../store/hooks/hooks.ts';
import { selectFavoriteOffers } from '../../store/selectors.ts';

function Header(): JSX.Element {
  const favoriteOffers = useAppSelector(selectFavoriteOffers);
  const favoriteCount = favoriteOffers.length;

  return (
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">

          <HeaderLogo />

        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to={ AppRoute.Favorites }>
                <div className="header__avatar-wrapper user__avatar-wrapper" />
                <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                <span className="header__favorite-count">{favoriteCount}</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to={ AppRoute.Login }>
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export { Header };
