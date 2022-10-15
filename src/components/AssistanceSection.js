import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'


const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem ;

`
const Container = styled.div`
    padding: 3rem calc((100vw - 1300px)/2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;
    @media screen and (max-width: 760px) {
        grid-template-columns: 1fr;
    }
    `
const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '1' : '2')};

    h1{
        margin-bottom: 1rem;
        font-size: clamp(4rem, 6vw, 2rem);
        color: #3682d0;
    }
    p{
        margin-bottom: 2rem;
    }
    a {   
         background-color: #e9ad95;
        font-weight: bolder;
        color: white;
        border-radius: 50px;
    }
`
const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '2' : '1')};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 760px) {
        order: ${({ reverse }) => (reverse ? '1' : '2')};
    }
    img{
        width: 90%;
        height: 90%;
        border-radius: 4rem;
        object-fit: cover;
        @media screen and (max-width: 760px) {
            display: none;
    }
    }
`




const AssistanceSection = ({ image, reverse, delay }) => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>Support 24/7</h1>
                   <p>Personal recommadation for your private parties any type of services one tap away 24/7 personal assistance regarding anything</p>
                    <Button  to='/homes'>Contact Our Helpline</Button>
                </ColumnLeft>
                <ColumnRight>
                    <img src={image} alt='pic-right' />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default AssistanceSection
