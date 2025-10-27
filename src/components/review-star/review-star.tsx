import { ChangeEvent } from 'react';

type ReviewStarProps = {
  value: number;
  title: string;
  isChecked: boolean;
  isDisabled: boolean;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
};

function ReviewStar({ value, title, isChecked, isDisabled, onChange }: ReviewStarProps): JSX.Element {
  const ratingId = `${value}-stars`;
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={ratingId}
        type="radio"
        checked={isChecked}
        disabled={isDisabled}
        onChange={onChange}
      />
      <label htmlFor={ratingId} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export { ReviewStar };
