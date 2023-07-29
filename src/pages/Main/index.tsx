import axios from 'axios';

import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { getPlaces } from '../../redux/slices/citiesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';

import { Cart } from '../../elements/cart';
import Header from '../../elements/header';

import { IOffer } from '../../types/offer';
import MainModal from '../../elements/mainModal';

function LoginPage (): JSX.Element {

  const dispatch = useDispatch();
  const cities = useSelector((state: RootState) => state.cities.cities);
  const filters = useSelector((state: RootState) => state.cities.filters);
  const places = useSelector((state: RootState) => state.cities.places);

  const [activeCity, setActiveCity] = useState<string>(cities[2]);
  const [activeFilter, setActiveFilter] = useState<string>(filters[0]);
  const [isModalOpen, setIsOpenModal] = useState<boolean>(false);

  let choosenCity: IOffer[] = [];

  useEffect(() => {
    axios.get('https://11.react.pages.academy/six-cities-simple/hotels').then((res) => {
      dispatch(getPlaces(res.data))
    });
  }, [])

  const filterBy = (field: string) => {
    return (a: any, b: any) => a[field] > b[field] ? 1 : -1;
  }

  const switchStateModal = () => {
    setIsOpenModal(!isModalOpen);
  }

  const switchCity = (index: number) => {
    setActiveCity(cities[index]);
  }

  const switchFilter = (index: number) => {
    setActiveFilter(filters[index]);
    switchStateModal();
  }


  for(let i = 0; i <= places.length; i++) {
    if (places[i]?.city.name === activeCity) {
      choosenCity.push(places[i]);
    }
  }

  if (activeFilter === filters[1]) {
    choosenCity.sort(filterBy('price'))
  } else if (activeFilter === filters[2]) {
    choosenCity.sort(filterBy('price')).reverse()
  } else if ((activeFilter === filters[3])) {
    choosenCity.sort(filterBy('rating')).reverse()
  }

  return (
    <>
      <Helmet>
        <title>Main</title>
      </Helmet>
      <div className='page page--gray page--main'>
        <div style={{ display: 'none' }}>
          <svg xmlns='http://www.w3.org/2000/svg'><symbol id='icon-arrow-select' viewBox='0 0 7 4'><path fillRule='evenodd' clipRule='evenodd' d='M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z'></path></symbol><symbol id='icon-bookmark' viewBox='0 0 17 18'><path d='M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z'></path></symbol><symbol id='icon-star' viewBox='0 0 13 12'><path fillRule='evenodd' clipRule='evenodd' d='M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z'></path></symbol></svg>
        </div>

        <Header />

        <main className='page__main page__main--index'>
          <h1 className='visually-hidden'>Cities</h1>
          <div className='tabs'>
            <section className='locations container'>
              <ul className='locations__list tabs__list'>
                { cities.map((item, index) => (
                  <li key={index} className='locations__item' onClick={() => switchCity(index)}>
                    <a className={`locations__item-link tabs__item ${activeCity === cities[index] && 'tabs__item--active'}`} href='#'>
                      <span>{item}</span>
                    </a>
                  </li>
                )) }
              </ul>
            </section>
          </div>
          <div className='cities'>
            <div className='cities__places-container container'>
              <section className='cities__places places'>
                <h2 className='visually-hidden'>Places</h2>
                <b className='places__found'>{choosenCity.length} places to stay in {activeCity}</b>
                <form className='places__sorting' action='#' method='get'>
                  <span className='places__sorting-caption'>Sort by</span>
                  <span className='places__sorting-type' tabIndex={undefined} onClick={() => switchStateModal()}>
                    {activeFilter}
                    <svg className='places__sorting-arrow' width='7' height='4'>
                      <use xlinkHref='#icon-arrow-select'></use>
                    </svg>
                  </span>
                  {isModalOpen && <MainModal filters={filters} activeFilter={activeFilter} switchFilter={switchFilter} /> }
                </form>
                <div className='cities__places-list places__list tabs__content'>
                  {choosenCity.map((item, index) => (
                    <Link key={index} to={`/offer/${item.id}`}>
                      <Cart data={item} />
                    </Link>
                  ))}
                </div>
              </section>
              <div className='cities__right-section'>
                <section className='cities__map map'></section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default LoginPage;
