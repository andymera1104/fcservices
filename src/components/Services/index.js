import React from 'react'
import Icon1 from '../../images/shingle.jpeg'
import Icon2 from '../../images/tileroof.jpeg'
import Icon3 from '../../images/tilefloor.jpg'
import { ServicesContainer,
        ServicesH1,
        ServicesCard,
        ServicesH2,
        ServicesIcon,
        ServicesP,
        ServicesWrapper } from './ServicesElement'
import { Link } from 'react-router-dom';




const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Main Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard  >
                    <ServicesIcon src={Icon1}></ServicesIcon>
                    <ServicesH2>Shingle Roofing</ServicesH2>
                    <ServicesP>Inspection, Installation, re-roofing, leak repairs, roof maintenance. Contact us for more information.</ServicesP> 
                    <Link to="../../../singles">Read More</Link>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}></ServicesIcon>
                    <ServicesH2>Tile Roofing</ServicesH2>
                    <ServicesP>Inspection, installation, change of base paper, change of wood, change of broken tiles.</ServicesP> 
                    <Link to="../../../tile">Read More</Link>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}></ServicesIcon>
                    <ServicesH2>Tile Roofing</ServicesH2>
                    <ServicesP>Inspecton, Remove material prior to the installation of tile on the floor, installation and repair of tile floors.</ServicesP> 
                    <Link to="../../../tileFloor">Read More</Link>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
