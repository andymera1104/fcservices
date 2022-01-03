import React from 'react'
import '../App.css';
import '../components/Cards.css'

import CardItem from '../components/CardItem';
const TileFloor = () => {
    return (
        <div>
        <h1 className='servicesTileFloor'>TILE FLOOR</h1>
       
        <div className='cards'>
                       <h1>MEASURE, REMOVE, INSTALLATION, MAINTENANCE TILE</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src="images/tilefloormeasure.jpg"
                        text="Take measurements of the floor to quote the value to be charged and the amount of material required."
                        label='MEASURE'
                        />
                        <CardItem 
                        src="images/tileremovingfloor.jpg"
                        text="Remove previously installed flooring to prepare the flooring for new tile" 
                        label='REMOVE'
                        />
                        <CardItem 
                        src="images/installationfloortile.jpg"
                        text="Floor tile installation with exact measurements to leave the floor level and with synchronized installation" 
                        label='INSTALLATION'
                        />
                        <CardItem 
                        src="images/tilerepairfloor.jpg"
                        text="Repair of broken tiles and repair of grout on the floor" 
                        label='MAINTENANCE'
                        />
                       
                    </ul>
                    
                </div>
            </div>
        </div>
    </div>
    )
}

export default TileFloor
