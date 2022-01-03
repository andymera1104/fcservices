import React from 'react'
import '../App.css';
import '../components/Cards.css'

import CardItem from '../components/CardItem';
const Tile = () => {
    return (
        <div>
        <h1 className='servicesT'>TILE ROOFING</h1>
       
        <div className='cards'>
                       <h1>REMOVE AND INSTALL TILE, TILE REPAIRS</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src="images/tileremovingroofing.jpg"
                        text="Remove tile roof to remove deteriorated wood and base paper."
                        label='REMOVE'
                        />
                        <CardItem 
                        src="images/tileinstalacionroofing.jpg"
                        text="Installation of tile roof, installation of wood and base paper." 
                        label='INSTALLATION'
                        />
                        <CardItem 
                        src="images/tilerepairroof.jpg"
                        text="Remove and repair broken tiles." 
                        label='TILE REPAIRS'
                        />
                        <CardItem 
                        src="images/tilemaintenanceroof.jpg"
                        text="Maintenance, cleaning and painting of tile roof" 
                        label='MAINTENANCE'
                        />
                    </ul>
                    
                </div>
            </div>
        </div>
    </div>
    )
}

export default Tile
