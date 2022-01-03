import React from 'react'
import Icon1 from '../images/safety.jpg'
import Icon2 from '../images/tileroof.jpeg'
import Icon3 from '../images/tilefloor.jpg'
import { ServicesContainer,
        ServicesH1,
        ServicesCard,
        ServicesH2,
        ServicesIcon,
        ServicesP,
        ServicesWrapper } from './ExperiencesElements.js'
import { Link } from 'react-router-dom';

const Experiences = () => {
    return (
        <ServicesContainer id='experiences'>
        <ServicesH1>Experiences</ServicesH1>
        <ServicesWrapper>
            <ServicesCard  >
                {/* <ServicesIcon src={Icon1}></ServicesIcon> */}
                <ServicesH2>Safety</ServicesH2>
                {/* <ServicesP>Inspection, Installation, re-roofing, leak repairs, roof maintenance. Contact us for more information.</ServicesP> */} 
               
            </ServicesCard>
            <ServicesCard>
                {/* <ServicesIcon src={Icon2}></ServicesIcon> */}
                <ServicesH2>Quality</ServicesH2>
                {/* <ServicesP>Inspection, installation, change of base paper, change of wood, change of broken tiles.</ServicesP>  */}
                
            </ServicesCard>
            <ServicesCard>
                {/* <ServicesIcon src={Icon3}></ServicesIcon> */}
                <ServicesH2>Warranty</ServicesH2>
               {/*  <ServicesP>Inspecton, Remove material prior to the installation of tile on the floor, installation and repair of tile floors.</ServicesP> */} 
               
            </ServicesCard>
            <ServicesCard>
                {/* <ServicesIcon src={Icon3}></ServicesIcon> */}
                <ServicesH2>Durability</ServicesH2>
                {/* <ServicesP>Inspecton, Remove material prior to the installation of tile on the floor, installation and repair of tile floors.</ServicesP> */} 
               
            </ServicesCard>
            <ServicesCard>
                <ServicesH2>Trust</ServicesH2>
            </ServicesCard>

            <ServicesCard>
                <ServicesH2>Reasonable Prices</ServicesH2>
            </ServicesCard>
            
        </ServicesWrapper>
    </ServicesContainer>
    )
}

export default Experiences
