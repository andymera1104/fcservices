import React, {useState} from 'react';
import Video from '../../videos/roofing.mp4';
import { Button } from '../ButtonElements';
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements';

const HeroSection = () => {

    const [hover, setHover]= useState(false);
    const onHover = () => {
        setHover(!onHover)
    }




    return (
        <HeroContainer id='home'>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4'>
                    </VideoBg>
                </HeroBg>
                <HeroContent>
                    <HeroH1>FENIX CUSTOM SERVICES </HeroH1>
                    <HeroP>
                    Roofing and Construction Services
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button 
                            to='services' 
                            onMouseEnter = { onHover} 
                            onMouseLeave= {onHover}     
                            primary='true'
                            dark='true'
                            >
                            Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
