import axios from 'axios';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { IOffer } from '../../types/offer';
import Header from '../../elements/header';
import Premium from '../../elements/isPremium';
import Pro from '../../elements/isPro';
import { Cart } from '../../elements/cart';
import Reviews from '../../components/reviews';

function OfferPage () {

  try {
    useEffect(() => {
      axios.get(`https://11.react.pages.academy/six-cities-simple/hotels/${id}`).then(res => setData(res.data))
      axios.get(`https://11.react.pages.academy/six-cities-simple/hotels/${id}/nearby`).then(res => setNearData(res.data))
    }, [])
  } catch (err) {
    console.log(err) 
  };

  const [data, setData] = useState<IOffer>();
  const [nearData, setNearData] = useState<IOffer[]>();
  const { id } = useParams();

  const filterBy = (field: string) => {
    return (a: any, b: any) => a[field] > b[field] ? 1 : -1;
  }

  nearData?.sort(filterBy('rating')).reverse()
  const sortRecommended = nearData?.slice(0,3);


  const rating = data?.rating;  
  return (
    <>
      <Helmet>
        <title>Room</title>
      </Helmet>
      <div className="page">
        <div style={{ display: "none" }}>
          <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
        </div>

        <Header />

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                { data?.images.map((item, index) => (
                  <div key={index} className="property__image-wrapper">
                    <img className="property__image" src={item} alt="Photo studio" />
                  </div>
                )) }
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                { data?.isPremium && <Premium /> }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    { data?.title }
                  </h1>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{ width: `${rating ? rating * 20 : 100}%` }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{data?.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {data?.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {data?.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {data?.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{data?.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {data?.goods.map((item, index) => (
                      <li key={index} className="property__inside-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={`../${data?.host.avatarUrl}`} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {data?.host.name}
                    </span>
                    {data?.host.isPro && <Pro />}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {data?.description}
                    </p>
                  </div>
                </div>
                <Reviews />
              </div>
            </div>
            <section className="property__map map"></section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                { sortRecommended?.map((item, index) => (
                  <Link key={index} to={`/offer/${item?.id}`}>
                    <Cart data={item} />
                  </Link>
                )) }
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default OfferPage;
