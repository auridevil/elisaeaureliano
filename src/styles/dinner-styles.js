import styled from 'styled-components'
import { thirdColor } from '../data/colors.yaml'

export const Pane = styled.section`
    box-sizing: border-box;
    min-height: 50vh;
    position: relative;
    width: 100%;
    padding: 2rem 1.5em;
    text-align: center;
    background-color: ${ thirdColor };
    flex: 1;
    display: block;
    align-items: center;
    position: relative;
    min-height: 100vh;
`

export const InfoTitle = styled.h2`
    font-family: 'Brandon Grotesque';
    font-size: 4vw;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    line-height: 1.2;
    color: #fff;
    font-weight: 500;
`

export const Underline = styled.span`
    display: block;
    width: 60px;
    border-bottom-width: 4px;
    border-bottom-style: solid;
    border-bottom-color: #fff;
    margin-left: auto;
    margin-right: auto;
`
export const RestaurantImage = styled.img`
    width: 25%;
    height: auto;
    margin: 1em 0 1.5em;
    border-radius: 100%;
`
export const SubTitle = styled.h4`
    font-family: 'Surveyor Fine';
    font-size: 1.875rem;
    font-weight: 700;
    margin-bottom: 1rem;
    margin: 0 0 0.75em;
    line-height: 1.2;
`

export const Details = styled.p`
    font-family: 'Brandon Grotesque';
    line-height: 1.8;
    max-width: 45em;
    font-size: 1.2em;
    font-weight: 500;
    margin-left: auto;
    margin-right: auto;
`
