import styled from "styled-components"


type CardStyledPropsType = {
    imgName: string
    cardTitle?: string
    cardDescription?: string
    cardStackDescription?: string

}

export function Card(props:CardStyledPropsType){
    return (
        <CardWrapper>
            <img src={props.imgName} alt="" />
            <h2>Project Tile goes here</h2>
            <p>
            This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content
            </p>
            <p>Tech stack : HTML , JavaScript, SASS, React</p>
            <a href="">Live Preview</a>
            <a href="">View Code</a>
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