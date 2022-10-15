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
        font-size: clamp(1.5rem, 6vw, 2rem);
    }
    p{
        margin-bottom: 2rem;
    }
`
const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '1' : '2')};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 760px) {
        order: ${({ reverse }) => (reverse ? '1' : '2')};
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        @media screen and (max-width: 760px) {
            width: 90%;
              height: 90%;
    }
    }
`




const InfoSection = ({ image, reverse, delay }) => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>Looking For a Private Island ?</h1>
                    <p>If you've been dreaming of a secluded private island vacation, we've got some great news. You can rent private islands located around the world on Airbnb — and in many cases, these exclusive stays cost nearly the same as hotel accommodations. We've rounded up 10 incredible private island rentals, including a beautiful home near Hilton Head Island, South Carolina, and a mangrove island surrounded by crystal-clear blue waters in Belize. Find your next relaxing getaway here.</p>
                    <Button primary='true' to='/homes'>View Homes</Button>
                </ColumnLeft>
                <ColumnRight>
                    <img src={image} alt='pic-right' />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection
