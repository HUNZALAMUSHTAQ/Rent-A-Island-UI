import React from 'react'
import styled from 'styled-components'
import { MenuData } from '../data/MenuData'
import { Button } from './Button'
import {FaTimes} from 'react-icons/fa'

const DropDownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen})=> (isOpen? '1': '0')};
    top:  ${({isOpen})=> (isOpen? '0': '-100%')};
`

const Icon = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 11.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
const CloseIcon = styled(FaTimes)`
    color: #000d1a;

`
const DropDownWrapper = styled.div``
const DropDownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4,80px) ;
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px){
        grid-template-rows:  (4,60px);
    }
`
const DropDownLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    color: #fff;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        color: #000d1a;
    }

`
const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`


const DropDown = ({isOpen, togglemenu}) => {
  return (
    <DropDownContainer isOpen={isOpen} onClick={togglemenu} >
        <Icon onClick={togglemenu} >
            <CloseIcon />
        </Icon>
        <DropDownWrapper>
            <DropDownMenu>
                {MenuData.map((item, index)=>(
                    <DropDownLink  to={item.link} key={index}>
                        {item.title}
                    </DropDownLink>)
                )}
            </DropDownMenu>
            <BtnWrap>
                <Button primary='true' round='true' big='true' to='/contact'>
                    Contact US
                </Button>
            </BtnWrap>
        </DropDownWrapper>
    </DropDownContainer>
  )
}

export default DropDown
