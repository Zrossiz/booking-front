import { useState } from "react";
import ReviewItem from "../../elements/reviewItem";
import { IReview } from "../../types/offer";

const Reviews = () => {
  const [reviewText, setReviewText] = useState<string>('');
  const [reviewRating, setReviewRating] = useState<number>(1);
  const [currentReviews, setCurrentReviews] = useState<IReview[]>([
      {
          text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
          rating: 4,
          currentTime: new Date()
      }
  ])
  const estimation: number[] = [5, 4, 3, 2, 1];

  const postReview = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setCurrentReviews([...currentReviews, {
          text: reviewText,
          rating: reviewRating,
          currentTime: new Date()
      }])
      setReviewRating(1);
      setReviewText('');
      e.preventDefault()
  }


  return (
    <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{currentReviews.length}</span></h2>
        <ul className="reviews__list">
            { currentReviews.map((item, index) => (
                <ReviewItem {...item}  key={index} />
            )) }
        </ul>
        <form className="reviews__htmlForm htmlForm">
            <label className="reviews__label htmlForm__label" htmlFor="review">Your review</label>
            <div className="reviews__rating-htmlForm htmlForm__rating" data-total-value={reviewRating}>
                { estimation.map((item, index) => (
                    <div 
                    key={index} 
                    className="icon-star" 
                    data-rating-value={index + 1}
                    onClick={() => setReviewRating(item)}
                    >
                        ★
                    </div>
                )) }
            </div>
            <textarea value={reviewText} onChange={(e) =>setReviewText(e.target.value)} className="reviews__textarea htmlForm__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
            <div className="reviews__button-wrapper">
                <p className="reviews__help">
                To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                </p>
                <button className="reviews__submit htmlForm__submit button" disabled={reviewText.length >= 5 ? false : true} onClick={(e) => postReview(e)}>Submit</button>
            </div>
        </form>
    </section>
  )
}

export default Reviews