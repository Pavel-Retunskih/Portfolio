import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapp";
import { Card, Cards } from "../../components/ProjectCart/Card";

import styled from "styled-components";



function Projects(){
    return(
        <ProjectsWrapp>
            <FlexWrapper>
            <h2>My Tech Stack</h2>
            <p> Technologies I've been working with recently</p>
            </FlexWrapper>
            <FlexWrapper wrap={"wrap"} gap= {"34px"} justify={"space-between"} align={"center"}>
                {Cards.map(({src, title, subtitle, stack})=><Card 
                src = {src} 
                cardTitle={title} 
                cardDescription= {subtitle} 
                cardStackDescription= {stack}/>)}
            </FlexWrapper>
            
        </ProjectsWrapp>
    )
}

export default Projects;

const ProjectsWrapp = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 34px;
`