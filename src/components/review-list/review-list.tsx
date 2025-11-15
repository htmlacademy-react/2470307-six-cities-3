import { TypeReview } from '../../types/review.ts';
import { ReviewItem } from '../review-item/review-item.tsx';
import { ReviewForm } from '../review-form/review-form.tsx';

type ReviewListProps = {
  reviews: TypeReview[];
  totalReviewsCount: number;
}

function ReviewList({ reviews, totalReviewsCount }: ReviewListProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ totalReviewsCount }</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem key={ review.id } review={ review } />
        ))}
      </ul>
      <ReviewForm />
    </section>
  );
}

export { ReviewList };
