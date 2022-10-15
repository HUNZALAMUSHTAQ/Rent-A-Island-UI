import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import styled from 'styled-components'

const FooterHead = styled.div`
background-color: black;
    display: flex;
    width: 100%;
    justify-content: center;
    height: 10vh;
    align-items: center;
    color: #3380d2;
    font-size: 18px;
    font-weight: 900;
`


const SocialLink = styled.a`
        padding-left: 3rem;
        cursor: pointer;

`

const Footer = () => {
    return (
        <FooterHead>
            <div>Mady By Hunzala Mushtaq</div>
            <div>
                <SocialLink href='https://www.google.com/'>
                    <FaFacebookF  style={{'height': '20px' , 'width': '20px', 'color':'white'}} />
                </SocialLink>
                <SocialLink href='https://www.google.com/' >
                    <FaLinkedinIn style={{'height': '20px' , 'width': '20px', 'color':'white'}}/>
                </SocialLink>
                <SocialLink href='https://www.linkedin.com/in/hunzala-mushtaq/' >
                    <FaInstagram style={{'height': '20px' , 'width': '20px', 'color':'white'}}/>
                </SocialLink>

            </div>
        </FooterHead>
    )
}

export default Footer
