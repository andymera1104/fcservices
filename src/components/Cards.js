import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>VARIEDAD Y CALIDAD EN CADA PRODUCTO</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src="image/jalapenoRoll.jpg"
                        text="Conoce nuestro MENU" 
                        label='Rollos'
                        path='/products'
                        />
                        <CardItem 
                        src="image/promociones.jpg"
                        text="Promociones" 
                        label='Promociones'
                        path='/products'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src="image/gifsushi.gif"
                        text="Best Sushi" 
                        label='Sushi'
                        path='/products'
                        />
                        <CardItem 
                        src="image/sushiroll.gif"
                        text="Best Sushi" 
                        label='Sushi'
                        path='/products'
                        />
                        <CardItem 
                        src="image/gifsushi.gif"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle" 
                        label='Adventure'
                        path='/services'
                        />
                        
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src="image/sushi.webp"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle" 
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem 
                        src="image/sushiportada.jpg"
                        text="Best Sushi" 
                        label='Sushi'
                        path='/products'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
