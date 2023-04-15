import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>The most popular destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Paris⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀'
              path='/services'
            />
            <CardItem
              src='images/img-2.webp'
              text='NewYork⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpeg'
              text='Kyiv⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Washington⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀'
              path='/services'
            />
            <CardItem
              src='images/img-8.jpg'
              text='London⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
