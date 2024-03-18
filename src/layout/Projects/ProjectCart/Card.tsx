import styled from "styled-components"
import imgCart1 from "../../../assets/images/projectImg1.jpg"
import imgCart2 from "../../../assets/images/projectImg2.jpg"
import imgCart3 from "../../../assets/images/projectImg3.jpg"
import imgCart4 from "../../../assets/images/projectImg4.jpg"
import imgCart5 from "../../../assets/images/projectImg5.jpg"
import imgCart6 from "../../../assets/images/projectImg6.jpg"
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapp"
import { Icon } from "../../../components/Icon/Icon"
import { Theme } from "../../../styles/Theme"

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
        <CardContainer>
            <img src={props.src} alt="" />
            <Description>
                <Title>{props.cardTitle}</Title>
                <Text>{props.cardDescription}</Text>
                <Stack>{`Tech stack : ${props.cardStackDescription}`}</Stack>
                <FlexWrapper justify={"space-between"} margin="0 0 25px 0">
                    <CardLink href="#"> <Icon iconId = {"link-chainIcon"} width={"20"} height={"20"} viewBox = {"0 0 20 20"}/>Live Preview</CardLink>
                    <CardLink href="#"><Icon iconId = {"githubIcon"} width={"20"} height={"20"} viewBox = {"0 0 90 90"}/>View Code</CardLink>
                </FlexWrapper>
            </Description>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
    width: 100%;
    max-width: 375px;
    @media ${Theme.media.tablet}{
        max-width: 360px;
    }
    border-radius: 20px;
    box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2);
    background: rgb(54, 54, 54);
    img{
        border-radius: 20px 20px 0 0;
        width: 100%;
    }
`
const Description = styled.div`
    padding: 0 30px;
    @media ${Theme.media.tablet}{
        padding: 0 10px;
    }
`

const Title = styled.h3`
    color: rgb(204, 204, 204);
    font-size: 28px;
    font-weight: 500;
    line-height: 1.2;
    margin: 27px 0 17px 0;
`
const Text = styled.p`
    color: rgb(204, 204, 204);
    font-size: 18px;
    font-weight: 300;
    line-height: 1.2;
`
const Stack = styled(Text)`
    font-size: 14px;
    margin: 12px 0 21px 0;
`
const CardLink = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    text-decoration-line: underline;
`