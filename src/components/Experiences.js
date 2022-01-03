import React from 'react'

import { ServicesContainer,
        ServicesH1,
        ServicesCard,
        ServicesH2,
        ServicesWrapper } from './ExperiencesElements.js'


const Experiences = () => {
    return (
        <ServicesContainer id='experiences'>
        <ServicesH1>Experiences</ServicesH1>
        <ServicesWrapper>
            <ServicesCard  >
               
                <ServicesH2>Safety</ServicesH2>
            
            </ServicesCard>
            <ServicesCard>
               
                <ServicesH2>Quality</ServicesH2>
              
            </ServicesCard>
            <ServicesCard>
                <ServicesH2>Warranty</ServicesH2>
            
            </ServicesCard>
            <ServicesCard>
                <ServicesH2>Durability</ServicesH2>
              
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
