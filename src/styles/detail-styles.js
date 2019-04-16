import styled from 'styled-components'
import { large, small } from './main-styles'
import { secondColor } from '../data/colors.yaml'

export const Pane = styled.section`
    box-sizing: border-box;
    min-height: 50vh;
    position: relative;
    width: 100%;
    padding: 2rem 1.5em;
    text-align: center;
    background-color: ${ secondColor };
    flex: 1;
    display: block;
    align-items: center;
    position: relative;
    min-height: 100vh;
`
export const TitleSection = styled.div`
    display: block;
`
export const IconImg = styled.img`
    width: 60px;
    margin: 0;
    max-width: 100%;
    margin-bottom: 10px;
`
export const WhoBlock = styled.div`
    font-family: 'Brandon Grotesque';
    line-height: 1.2;
    margin-bottom: 50px;
`
export const InfoBlock = styled.div`
    ${ small`
        padding: 10px 10px 10px 10px;
    ` }
    ${ large`
        margin-left: 10%;
        margin-right:10%;
        display:inline-block;
    ` }
    font-family: 'Brandon Grotesque';
    line-height: 1.2;
    margin-bottom: 50px;
`
export const InfoTitle = styled.h2`
    font-family: 'Brandon Grotesque';
    font-size: 3rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    line-height: 1.2;
    color: #b28f4f;
    font-weight: 900;
`
export const Description = styled.p`
    font-size: 1.5em;
    max-width: 45em;
    line-height: 1.5;
    font-family: 'Brandon Grotesque';
    color: #333;
    margin: 24px;
    margin-left: auto;
    margin-right: auto;
`
export const SubDescription = styled.p`
    letter-spacing: 0.1em;
    max-width: 45em;
    font-size: 1.2em;
    text-transform: uppercase;
    color: #333;
    margin-left: auto;
    margin-right: auto;
`
export const Underline = styled.span`
    display: block;
    width: 60px;
    border-bottom-width: 4px;
    border-bottom-style: solid;
    border-bottom-color: #333;
    margin-left: auto;
    margin-right: auto;
`
export const PaneRow = styled.div`
    display: block;
    margin-bottom: 3em;
    text-align: center;
`
