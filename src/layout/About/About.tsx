import styled from "styled-components";
import { Container } from "../../components/Container/Container";
import { Education } from "./Education/Education";
import { Section } from "../../components/Section/Section";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { WorkExperince } from "./WorkExperience/WorkExperience";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapp";
import brickWallImg from "../../assets/images/brickwall.png"
import { Theme } from "../../styles/Theme";
import { SideText } from "../../components/ui/SideText";


const experienceData = [
    {position: "Junior Web Developer",
    workingHours: "Full Time",
    company: "Dr. Rajkumar's Learning App",
    place: "Bengaluru",
    workPeriod: "Sep 2021 - Dec 2021"
    },
    {position: "Web Development Intern",
    workingHours: "Internship",
    company: "IonPixelz Web Solutions",
    place: "Bengaluru",
    workPeriod: "Sep 2021 - Dec 2021"
    },
    {position: "SEO / SEM Specialist",
    workingHours: "Internship",
    company: "HAAPS",
    place: "Bengaluru",
    workPeriod: "Sep 2021 - Dec 2021"
    },
]

const educationData =[
    {position: "JBachelor in Electronics & Communication",
    workingHours: "Full Time",
    university: "Bangalore Instutute of Technology",
    workPeriod: "Aug 2015 - Dec 2020"
    }
]

export function About(){
    return(
        <Section>
            <Container>
                <FlexWrapper>
                    <FlexWrapper direction={"column"}>
                        <SideText>
                            <SectionTitle>About Me</SectionTitle>
                        </SideText>
                        <SideText>
                            <Text>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</Text>
                        </SideText>
                        <SideText>
                            <Subtitle>Work Experience</Subtitle>
                        </SideText>
                        {experienceData.map(({position, workingHours, company, place, workPeriod})=> 
                        <WorkExperince 
                            title = {position}
                            working = {workingHours}
                            company={company}
                            place ={place}
                            period = {workPeriod}/>
                        )}
                        <SideText>
                            <Subtitle>Education</Subtitle>
                        </SideText>
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
    width: 100%;
    max-width: 1330px;
    position: relative;
    @media ${Theme.media.mobile}{
        display: none;
    }
`
const AboutImg = styled.img`
    position: absolute;
    top: -45px;
`
const Subtitle = styled(SectionTitle)`
    margin-bottom: 30px;
`