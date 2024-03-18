import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapp";
import { Card} from "./ProjectCart/Card";
import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Container } from "../../components/Container/Container";
import { Section } from "../../components/Section/Section";
import imgCart1 from "../../assets/images/projectImg1.jpg"
import imgCart2 from "../../assets/images/projectImg2.jpg"
import imgCart3 from "../../assets/images/projectImg3.jpg"
import imgCart4 from "../../assets/images/projectImg4.jpg"
import imgCart5 from "../../assets/images/projectImg5.jpg"
import imgCart6 from "../../assets/images/projectImg6.jpg"

const ProjectCards = [
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


export function Projects(){
    return(
        <Section>
            <Container>
                <FlexWrapper direction="column">
                        <SectionTitle>My Tech Stack</SectionTitle>
                        <SubTitle> Technologies I've been working with recently</SubTitle>
                    <FlexWrapper wrap={"wrap"} justify={"space-between"} align={"center"}>
                        {ProjectCards.map(({src, title, subtitle, stack})=><Card 
                        src = {src} 
                        cardTitle={title} 
                        cardDescription= {subtitle} 
                        cardStackDescription= {stack}/>)}
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </Section>
    )
}

const SubTitle = styled.h3`
    margin: 30px 0 110px 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
`