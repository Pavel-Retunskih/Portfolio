import styled from "styled-components"
import imgCart1 from "../../../assets/images/projectImg1.jpg"
import imgCart2 from "../../../assets/images/projectImg2.jpg"
import imgCart3 from "../../../assets/images/projectImg3.jpg"
import imgCart4 from "../../../assets/images/projectImg4.jpg"
import imgCart5 from "../../../assets/images/projectImg5.jpg"
import imgCart6 from "../../../assets/images/projectImg6.jpg"
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapp"

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
            <Description>
                <Title>{props.cardTitle}</Title>
                <Text>{props.cardDescription}</Text>
                <Stack>{`Tech stack : ${props.cardStackDescription}`}</Stack>
                <FlexWrapper justify={"space-between"}>
                    <CardLink href="#">Live Preview</CardLink>
                    <CardLink href="#">View Code</CardLink>
                </FlexWrapper>
            </Description>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
    width: 375px;
    height: 570px;
    border-radius: 20px;
    box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2);
    padding: 0 30px;
    background: rgb(54, 54, 54);
    img{
        border-radius: 20px 20px 0 0;
    }
`
const Description = styled.div`
    
`

const Title = styled.h3`
    color: rgb(204, 204, 204);
    font-size: 28px;
    font-weight: 500;
    line-height: 26px;
    margin: 27px 0 17px 0;
`
const Text = styled.p`
    color: rgb(204, 204, 204);
    font-size: 18px;
    font-weight: 300;
    line-height: 26px;
`
const Stack = styled(Text)`
    font-size: 14px;
    margin: 12px 0 21px 0;
`
const CardLink = styled.a`
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    text-decoration-line: underline;
        &::before{
            display: flex;
            width: 20px;
            height: 20px;
            background-image: url();
        }
`