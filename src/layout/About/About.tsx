import styled from "styled-components";
import { Container } from "../../components/Container/Container";
import { Education } from "./Education/Education";
import { educationData } from "./Education/Education";
import { Section } from "../../components/Section/Section";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { WorkExperince } from "./WorkExperience/WorkExperience";
import {experience} from "./WorkExperience/WorkExperience"
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapp";
import brickWallImg from "../../assets/images/brickwall.png"

export function About(){
    return(
        <Section>
            <Container>
                <FlexWrapper>
                    <FlexWrapper direction={"column"}>
                        <SectionTitle marginBottom={"38px"}>About Me</SectionTitle>
                        <Text>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</Text>
                        <SectionTitle>Work Experience</SectionTitle>
                        {experience.map(({position, workingHours, company, place, workPeriod})=> 
                        <WorkExperince 
                            title = {position}
                            working = {workingHours}
                            company={company}
                            place ={place}
                            period = {workPeriod}/>
                        )}
                        <SectionTitle>Education</SectionTitle>
                        {educationData.map(({position, workingHours, university, workPeriod})=>
                        <Education 
                            title = {position}
                            working = {workingHours}
                            university={university}
                            period = {workPeriod}/>
                        )}
                    </FlexWrapper>
                    <ImageBox>
                        <AboutImg src = {brickWallImg}/>
                    </ImageBox>
                </FlexWrapper>
            </Container>
        </Section>
    )
}

const Text = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;
    margin: 40px 0;
`

const ImageBox = styled.div`
    width: 1330px;
    position: relative;
`
const AboutImg = styled.img`
    position: absolute;
    top: -45px;
`
