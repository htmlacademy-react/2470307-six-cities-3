import { useState, ChangeEvent, FormEvent, Fragment } from 'react';
import { ReviewStar } from '../review-star/review-star.tsx';
import { MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH, REVIEW_RAITING_TITLES } from '../../constants.ts';

function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: 0,
    review: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: name === 'rating' ? Number(value) : value });
  };

  const resetForm = () => {
    setFormData({ rating: 0, review: '' });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки данных на сервер
    setTimeout(() => {
      // eslint-disable-next-line no-console
      console.log(formData);
      setIsSubmitting(false);
      resetForm();
    }, 1000);
  };

  const isFormValid = formData.review.length >= MIN_REVIEW_LENGTH && formData.review.length <= MAX_REVIEW_LENGTH && formData.rating > 0;

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(REVIEW_RAITING_TITLES).reverse().map(([score, title]) => (
          <Fragment key={score}>
            <ReviewStar
              value={Number(score)}
              title={title}
              isChecked={Number(score) === formData.rating}
              isDisabled={isSubmitting}
              onChange={handleFieldChange}
            />
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
        disabled={isSubmitting}
        onChange={handleFieldChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_REVIEW_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormValid || isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export { ReviewForm };
