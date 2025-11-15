import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks.ts';
import { AppRoute, AuthorizationStatus, BUTTON_CONFIG } from '../../constants.ts';
import { changeFavoriteStatusAction } from '../../store/action/action.ts';

type BookmarkButtonProps = {
  offerId: string;
  isFavorite: boolean;
  buttonType: 'place-card' | 'offer';
};

function BookmarkButton({ offerId, isFavorite, buttonType }: BookmarkButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { className, width, height } = BUTTON_CONFIG[buttonType];
  const activeClassName = isFavorite ? `${className}--active` : '';

  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);

  const handleBookmarkClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }

    const newStatus = isFavorite ? 0 : 1;
    dispatch(changeFavoriteStatusAction({ offerId, status: newStatus }));
  };

  return (
    <button className={`${className} button ${activeClassName}`} type="button" onClick={handleBookmarkClick}>
      <svg className={`${className.replace('button', 'icon')}`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export { BookmarkButton };
