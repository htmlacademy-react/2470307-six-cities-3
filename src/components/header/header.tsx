import { Link, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants.ts';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks.ts';
import { logoutAction } from '../../store/action/api-actions.ts';

function Header(): JSX.Element {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);
  const userData = useAppSelector((state) => state.user.userData);
  const favoritesCount = useAppSelector((state) => state.favorites.favorites.length);

  const handleLogoutClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());

  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.Auth && userData ? (
                <>
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                        {userData.avatarUrl && <img src={userData.avatarUrl} alt="User avatar" width="20" height="20" />}
                      </div>
                      <span className="header__user-name user__name">{userData.email}</span>
                      <span className="header__favorite-count">{favoritesCount}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#" onClick={handleLogoutClick}>
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </>
              ) : (
                location.pathname as AppRoute !== AppRoute.Login && (
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                      <div className="header__avatar-wrapper user__avatar-wrapper" />
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export { Header };
