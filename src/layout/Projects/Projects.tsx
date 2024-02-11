import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapp";
import { Card, Cards } from "../../components/ProjectCart/Card";

import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Container } from "../../components/Container/Container";



export function Projects(){
    return(
        <ProjectsWrapp>
            <Container>
                <FlexWrapper direction="column">
                    <FlexWrapper>
                        <SectionTitle>My Tech Stack</SectionTitle>
                        <h3> Technologies I've been working with recently</h3>
                    </FlexWrapper>
                    <FlexWrapper wrap={"wrap"} gap= {"34px"} justify={"space-between"} align={"center"}>
                        {Cards.map(({src, title, subtitle, stack})=><Card 
                        src = {src} 
                        cardTitle={title} 
                        cardDescription= {subtitle} 
                        cardStackDescription= {stack}/>)}
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </ProjectsWrapp>
    )
}

const ProjectsWrapp = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 34px;
`