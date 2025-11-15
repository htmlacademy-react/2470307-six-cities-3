import { useState, ChangeEvent, FormEvent, Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks.ts';
import { postReviewAction } from '../../store/action/action.ts';
import {
  MAX_REVIEW_LENGTH,
  MIN_REVIEW_LENGTH,
  REVIEW_RAITING_TITLES,
  AuthorizationStatus,
  INITIAL_RATING,
  REVIEW_STAR_DIMENSIONS
} from '../../constants.ts';

function ReviewForm(): JSX.Element | null {
  const { id: offerId } = useParams();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({ rating: INITIAL_RATING, review: '' });

  const { isReviewSending, reviewSendError } = useAppSelector((state) => state.offerReview);
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);

  useEffect(() => {
    if (!isReviewSending && !reviewSendError) {
      setFormData({ rating: INITIAL_RATING, review: '' });
    }
  }, [isReviewSending, reviewSendError]);

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid = formData.rating !== 0 && formData.review.length >= MIN_REVIEW_LENGTH && formData.review.length <= MAX_REVIEW_LENGTH;

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (isFormValid && offerId) {
      dispatch(postReviewAction({
        offerId,
        reviewData: { comment: formData.review, rating: Number(formData.rating) }
      }));
    }
  };

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return null;
  }

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(REVIEW_RAITING_TITLES).reverse().map(([score, title]) => (
          <Fragment key={score}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={score}
              id={`${score}-stars`}
              type="radio"
              checked={Number(formData.rating) === Number(score)}
              disabled={isReviewSending}
              onChange={handleFieldChange}
            />
            <label htmlFor={`${score}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width={REVIEW_STAR_DIMENSIONS.width} height={REVIEW_STAR_DIMENSIONS.height}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
        disabled={isReviewSending}
        onChange={handleFieldChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_REVIEW_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormValid || isReviewSending}>
          {isReviewSending ? 'Submitting...' : 'Submit'}
        </button>
      </div>
      {reviewSendError && (
        <p style={{ color: 'red', textAlign: 'center' }}>Failed to post review. Please try again.</p>
      )}
    </form>
  );
}

export { ReviewForm };
