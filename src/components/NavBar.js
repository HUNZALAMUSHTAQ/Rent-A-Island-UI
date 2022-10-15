import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { MenuData } from '../data/MenuData'
import { Button } from './Button'
import {GiHamburgerMenu} from 'react-icons/gi'

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;

    background: rgba(0,0,0,0.15);
`
const NavLink = css`
    color: black;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`
const Logo = styled(Link)`
    ${NavLink}
    font-size: 18px;
    font-weight: bolder;
    color: #F7C815
;
`
const MenuBar = styled(GiHamburgerMenu)`
    display: none;
    @media screen and (max-width: 760px ) {
        display: block;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
    }
`
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;
    

    @media screen and (max-width: 760px ) {
        display: none;
    }
`
const NavMenuLinks = styled(Link)`
    ${NavLink}
    color: #f7c820;
    font-weight: 900;

`
const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    
    @media screen and (max-width: 760px ) {
        display: none;
    }
`
const NavBar = ({togglemenu}) => {
    return (
        <Nav>
            <Logo>Rent A Island</Logo>
            <MenuBar onClick={togglemenu} />
            <NavMenu>
                {MenuData.map((item, index) => (
                    <NavMenuLinks key={index} to={item.link}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button primary='true'  to='/contact'>
                    Contact Us
                </Button>
            </NavBtn>
        </Nav>
    )
}

export default NavBar
