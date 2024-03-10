import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapp";
import { Card, Cards } from "./ProjectCart/Card";

import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Container } from "../../components/Container/Container";
import { Section } from "../../components/Section/Section";



export function Projects(){
    return(
        <Section>
            <Container>
                <FlexWrapper direction="column">
                        <SectionTitle>My Tech Stack</SectionTitle>
                        <SubTitle> Technologies I've been working with recently</SubTitle>
                    <FlexWrapper wrap={"wrap"} justify={"space-between"} align={"center"}>
                        {Cards.map(({src, title, subtitle, stack})=><Card 
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