import { IOffer } from "../../types/offer";

interface CartProps {
  data: IOffer
}

export function Cart ({ data }: CartProps) {

  const rating = data?.rating;

  return (
    <article className='cities__card place-card'>
      { data?.isPremium && 
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <img className='place-card__image' src={data?.previewImage} width='260' height='200' alt='Place image' />
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{data?.price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${data?.rating ? rating * 20 : 100}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <span>{data?.title}</span>
        </h2>
        <p className='place-card__type'>{data?.type}</p>
      </div>
    </article>
  );
}
