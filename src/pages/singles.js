import React from 'react'
import '../App.css';
import '../components/Cards.css'

import CardItem from '../components/CardItem';
const Shingles = () => {
    return (
        <div>
        <h1 className='services'>SHINGLE ROOFING</h1>
       
        <div className='cards'>
                       <h1>INSPECTION AND MEASUREMENT</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src="images/inspeccionroofing.jpg"
                        text="Previous inspection to know the state of your roof."
                        label='INSPECTION'
                        />
                        <CardItem 
                        src="images/medicionroofing.jpg"
                        text="Take measurements of your roof to give an approximate material and price." 
                        label='MEASUREMENT'
                        />
                        
                    </ul>
                    
                </div>
            </div>
        </div>

        <div className='cards'>
            <h1>RESIDENTIAL RE-ROOFING AND ROOF INSTALLATION </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src="images/re-reoofing.jpg"
                        text="ReRoofin with Nesting and Bridging Methods, prior material inspection is required." 
                        label='RE-ROOFING'
                        />
                        <CardItem 
                        src="images/installationroofing.jpg"
                        text="Installation of shingles according to climatic factors and inclination." 
                        label='INSTALLATION'
                        />
                    </ul>
                </div>
            </div>
        </div>

        <div className='cards'>
            <h1>LEAK REPAIRS, ROOF REPAIRS, ROOF MAINTENANCE</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src="images/leakrepair.jpg"
                        text="Repair of leaks with silicone or remove pipes or shingles that allow water to enter." 
                        label='LEAK REPAIRS'
                        />
                        <CardItem 
                        src="images/maintenance.jpg"
                        text="Repairs of material stuck or previously improperly installed." 
                        label='ROOF REPAIRS'
                        />
                        <CardItem 
                        src="images/maintenanceroofing.jpg"
                        text="We provide maintenance and cleaning of channels, valleys and complete roof." 
                        label='MAINTENANCE'
                        />
                    </ul>
                            
                </div>
            </div>
        </div>
    </div>
    )
}

export default Shingles
