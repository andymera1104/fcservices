import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, WebsiteRights} from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

    const toogleHome = ()=>{
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
               
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toogleHome} >
                            FENIX
                        </SocialLogo>
                        <WebsiteRights>FENIX © {new Date().getFullYear()} All rights reserved. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='https://www.facebook.com/fenixcustomservices' target="_blank" aria-label ="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>

            
            
        </FooterContainer>
    )
}

export default Footer
