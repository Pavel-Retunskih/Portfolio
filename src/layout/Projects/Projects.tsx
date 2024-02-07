import { Card } from "../../components/ProjectCart/Card";
import imgCart1 from "../../assets/images/projectImg1.jpg"
import imgCart2 from "../../assets/images/projectImg2.jpg"
import imgCart3 from "../../assets/images/projectImg3.jpg"
import imgCart4 from "../../assets/images/projectImg4.jpg"
import imgCart5 from "../../assets/images/projectImg5.jpg"
import imgCart6 from "../../assets/images/projectImg6.jpg"
import styled from "styled-components";

const CardImages = [
    {src : imgCart1},
    {src : imgCart2},
    {src : imgCart3},
    {src : imgCart4},
    {src : imgCart5},
    {src : imgCart6},
]

function Projects(){
    return(
        <ProjectsWrapp>
            <h2>My Tech Stack</h2>
            <p> Technologies I've been working with recently</p>
            {CardImages.map(({src})=><Card imgName = {src}/>)}
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