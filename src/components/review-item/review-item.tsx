import { TypeReview } from '../../types/review.ts';
import {
  DATE_FORMAT_OPTIONS,
  REVIEW_AVATAR_DIMENSIONS,
  DATE_SUBSTRING_INDEX
} from '../../constants.ts';
import { getRatingWidth } from '../../utils/utils.ts';

type ReviewItemProps = {
  review: TypeReview;
}

function ReviewItem({ review }: ReviewItemProps): JSX.Element {
  const { user, rating, comment, date } = review;

  const reviewDate = new Date(date);
  const formattedDate = reviewDate.toLocaleString('en-US', DATE_FORMAT_OPTIONS);
  const dateTimeAttribute = reviewDate.toISOString().substring(DATE_SUBSTRING_INDEX.start, DATE_SUBSTRING_INDEX.end);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={ user.avatarUrl } width={REVIEW_AVATAR_DIMENSIONS.width} height={REVIEW_AVATAR_DIMENSIONS.height} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{ user.name }</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${getRatingWidth(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={ dateTimeAttribute }>{ formattedDate }</time>
      </div>
    </li>
  );
}

export { ReviewItem };
