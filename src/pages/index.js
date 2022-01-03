import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import AboutSection from '../components/AboutSection';

import { homeObjOne,homeObjTwo, homeObjThree, homeObjAbout } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';
import Mailer from '../components/mailer';
import Experiences from '../components/Experiences';
//import Footer from '../components/Footer';



const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }



    return (
        <>
         <Sidebar isOpen= {isOpen} toggle={toggle}></Sidebar>
         <Navbar toggle={toggle}></Navbar>    
         <HeroSection></HeroSection>
         <AboutSection {...homeObjAbout}></AboutSection>
         <InfoSection {...homeObjOne}></InfoSection>
         <InfoSection {...homeObjTwo}></InfoSection> 
         <Services ></Services>    
         <InfoSection {...homeObjThree}></InfoSection>     
         <Experiences></Experiences>
         <Mailer></Mailer>
         
        </>
    )
}

export default Home
