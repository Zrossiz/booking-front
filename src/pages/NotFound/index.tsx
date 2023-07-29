import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../elements/header';
import './style.css';
import { Link } from 'react-router-dom';

function NotFound () {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <Header />
      <div className="notFound__wrapper">
        <div className="notFound">
          <h1>Упс...</h1>
          <span>Страница не найдена</span>
          <Link to="/" className="tabs__item--active">Вернуться на гланую страницу</Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
