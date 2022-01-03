import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper } from './SidebarElements'

const Sidebar = ({toggle,isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon>

                </CloseIcon>
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='services'onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to='experiences' onClick={toggle}>Experiences</SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>

        </SidebarContainer>
    )
}

export default Sidebar
