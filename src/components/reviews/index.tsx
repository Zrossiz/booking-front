import { useState } from "react";

const Reviews = () => {
const [reviewText, setReviewText] = useState<string>('');
const [reviewRating, setReviewRating] = useState<number>();
const estimation: number = 5;


  return (
    <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
        <ul className="reviews__list">
            <li className="reviews__item">
                <div className="reviews__user user">
                    <div className="reviews__avatar-wrapper user__avatar-wrapper">
                        <img className="reviews__avatar user__avatar" src="../img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
                    </div>
                    <span className="reviews__user-name">
                        Max
                    </span>
                </div>
                <div className="reviews__info">
                    <div className="reviews__rating rating">
                        <div className="reviews__stars rating__stars">
                            <span style={{ width: "80%" }}></span>
                            <span className="visually-hidden">Rating</span>
                        </div>
                    </div>
                    <p className="reviews__text">
                        A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                    </p>
                    <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                </div>
            </li>
        </ul>
        <form className="reviews__htmlForm htmlForm" action="#" method="post">
            <label className="reviews__label htmlForm__label" htmlFor="review">Your review</label>
            <div className="reviews__rating-htmlForm htmlForm__rating">
                <input className="htmlForm__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
                <label htmlFor="5-stars" className="reviews__rating-label htmlForm__rating-label" title="perfect">
                    <svg className="htmlForm__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                    </svg>
                </label>

                <input className="htmlForm__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
                <label htmlFor="4-stars" className="reviews__rating-label htmlForm__rating-label" title="good">
                    <svg className="htmlForm__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                    </svg>
                </label>

                <input className="htmlForm__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
                <label htmlFor="3-stars" className="reviews__rating-label htmlForm__rating-label" title="not bad">
                    <svg className="htmlForm__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                    </svg>
                </label>

                <input className="htmlForm__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
                <label htmlFor="2-stars" className="reviews__rating-label htmlForm__rating-label" title="badly">
                    <svg id="icon-star" viewBox="0 0 13 12" width="37" height="33">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path>
                    </svg>
                </label>

                <input className="htmlForm__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
                <label htmlFor="1-star" className="reviews__rating-label htmlForm__rating-label" title="terribly">
{/*                     <svg className="htmlForm__star-image" width="37" height="33">
                        <use xlinkHref="#icon-arrow-select"></use>
                    </svg> */}
                    <svg id="icon-star" viewBox="0 0 13 12" width="37" height="33">
                        <path className="icon-fill" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path>
                    </svg>
                </label>
            </div>
            <textarea className="reviews__textarea htmlForm__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
            <div className="reviews__button-wrapper">
                <p className="reviews__help">
                To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                </p>
                <button className="reviews__submit htmlForm__submit button" type="submit" disabled={undefined}>Submit</button>
            </div>
        </form>
    </section>
  )
}

export default Reviews