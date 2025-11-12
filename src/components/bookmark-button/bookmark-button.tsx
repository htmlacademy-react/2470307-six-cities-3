import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks.ts';
import { AppRoute, AuthorizationStatus } from '../../constants.ts';
import { changeFavoriteStatusAction } from '../../store/action/api-actions.ts';

type BookmarkButtonProps = {
  offerId: string;
  isFavorite: boolean;
  buttonType: 'place-card' | 'offer';
};

const buttonConfig = {
  'place-card': {
    className: 'place-card__bookmark-button',
    width: 18,
    height: 19,
  },
  'offer': {
    className: 'offer__bookmark-button',
    width: 31,
    height: 33,
  },
};

function BookmarkButton({ offerId, isFavorite, buttonType }: BookmarkButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);

  const handleBookmarkClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }

    const newStatus = isFavorite ? 0 : 1;
    dispatch(changeFavoriteStatusAction({ offerId, status: newStatus }));
  };

  const { className, width, height } = buttonConfig[buttonType];
  const activeClassName = isFavorite ? `${className}--active` : '';

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
