import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FooterContainer, FooterWrap,  FooterLinksWrapper, FoooterLinksContainer, FooterLinkTitle, FooterLink, FooterLinkItems, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, WebsiteRights} from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

    const toogleHome = ()=>{
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
                {/* <FoooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Quick Links  </FooterLinkTitle> 
                                <FooterLink to='/'> How we work</FooterLink>
                                <FooterLink to='/'> Services</FooterLink>
                                <FooterLink to='/'> Products</FooterLink>
                                <FooterLink to='/'> Testimonials</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us  </FooterLinkTitle> 
                                <FooterLink to='/'> How we work</FooterLink>
                                <FooterLink to='/'> Contact</FooterLink>
                                <FooterLink to='/'> Support</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media  </FooterLinkTitle> 
                                <FooterLink to='/'> Facebook</FooterLink>
                                <FooterLink to='/'> Instagram</FooterLink>
                                <FooterLink to='/'> Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FoooterLinksContainer> */}
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toogleHome} >
                            FENIX
                        </SocialLogo>
                        <WebsiteRights>FENIX © {new Date().getFullYear()} All rights reserved. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target="_blank" aria-label ="Facebook">
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
