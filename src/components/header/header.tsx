import { Link, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, AVATAR_DIMENSIONS } from '../../constants.ts';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks.ts';
import { logoutAction } from '../../store/action/action.ts';
import { Logo } from '../logo/logo.tsx';

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
            <Logo type="header" />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.Auth && userData ? (
                <>
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                        {userData.avatarUrl && <img src={userData.avatarUrl} alt="User avatar" width={AVATAR_DIMENSIONS.width} height={AVATAR_DIMENSIONS.height} />}
                      </div>
                      <span className="header__user-name user__name">{userData.email}</span>
                      <span className="header__favorite-count">{favoritesCount}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to="#" onClick={handleLogoutClick}>
                      <span className="header__signout">Sign out</span>
                    </Link>
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
