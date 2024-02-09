import styled from "styled-components"
import imgCart1 from "../../assets/images/projectImg1.jpg"
import imgCart2 from "../../assets/images/projectImg2.jpg"
import imgCart3 from "../../assets/images/projectImg3.jpg"
import imgCart4 from "../../assets/images/projectImg4.jpg"
import imgCart5 from "../../assets/images/projectImg5.jpg"
import imgCart6 from "../../assets/images/projectImg6.jpg"

export const Cards = [
    {src : imgCart1,
    title: 'Project Tile goes here',
    subtitle: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    stack: 'HTML , JavaScript, SASS, React'},
    {src : imgCart2,
        title: 'Project Tile goes here',
        subtitle: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        stack: 'HTML , JavaScript, SASS, React'},
    {src : imgCart3,
        title: 'Project Tile goes here',
        subtitle: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        stack: 'HTML , JavaScript, SASS, React'},
    {src : imgCart4,
        title: 'Project Tile goes here',
        subtitle: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        stack: 'HTML , JavaScript, SASS, React'},
    {src : imgCart5,
        title: 'Project Tile goes here',
        subtitle: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        stack: 'HTML , JavaScript, SASS, React'},
    {src : imgCart6,
        title: 'Project Tile goes here',
        subtitle: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        stack: 'HTML , JavaScript, SASS, React'}
]


type CardStyledPropsType = {
    src: string
    cardTitle?: string
    cardDescription?: string
    cardStackDescription?: string

}

export function Card(props:CardStyledPropsType){
    return (
        <CardWrapper>
            <img src={props.src} alt="" />
            <h2>{props.cardTitle}</h2>
            <p>{props.cardDescription}</p>
            <p>{`Tech stack : ${props.cardStackDescription}`}</p>
            <a href="#">Live Preview</a>
            <a href="#">View Code</a>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 375px;
    height: 570px;
    border-radius: 20px;
    box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2);
    img{
        border-radius: 20px 20px 0 0;
    }
`