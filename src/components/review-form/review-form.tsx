import { useState, ChangeEvent, FormEvent, Fragment } from 'react';
import { ReviewStar } from '../review-star/review-star.tsx';
import { MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH, REVIEW_RAITING_TITLES } from '../../constants.ts';

function ReviewForm(): JSX.Element {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
  };

  const resetForm = () => {
    setRating(0);
    setReview('');
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки данных на сервер
    setTimeout(() => {
      // eslint-disable-next-line no-console
      console.log({ rating, review });
      setIsSubmitting(false);
      resetForm();
    }, 1000);
  };

  const isFormValid = review.length >= MIN_REVIEW_LENGTH && review.length <= MAX_REVIEW_LENGTH && rating > 0;

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(REVIEW_RAITING_TITLES).reverse().map(([score, title]) => (
          <Fragment key={score}>
            <ReviewStar
              value={Number(score)}
              title={title}
              isChecked={Number(score) === rating}
              isDisabled={isSubmitting}
              onChange={handleRatingChange}
            />
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        disabled={isSubmitting}
        onChange={handleReviewChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormValid || isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export { ReviewForm };
