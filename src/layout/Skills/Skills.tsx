import styled from "styled-components";
import { Icon } from "../../components/Icon/Icon";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapp";
import { Container } from "../../components/Container/Container";
import { Section } from "../../components/Section/Section";

export function Skills(){
    return(
        <Section>
            <Container>
                    <SectionTitle>My Tech Stack</SectionTitle>
                    <SubTitle> Technologies I've been working with recently</SubTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"} gap = {"90px"}>
                    <Icon height="120" width="120" viewBox="0 0 120 120" iconId="htmlIcon"/>
                    <Icon height="120" width="120" viewBox="0 0 120 120" iconId="cssIcon"/>
                    <Icon height="120" width="120" viewBox="0 0 120 120" iconId="jsIcon"/>
                    <Icon height="120" width="120" viewBox="0 0 120 120" iconId="reactIcon"/>
                    <Icon height="120" width="120" viewBox="0 0 120 120" iconId="reduxIcon"/>
                    <Icon height="120" width="120" viewBox="0 0 120 120" iconId="bootstrapIcon"/>
                    <Icon height="120" width="120" viewBox="0 0 120 120" iconId="tailwindIcon"/>
                    <Icon height="120" width="120" viewBox="0 0 120 120" iconId="sassIcon"/>
                    <Icon height="120" width="120" viewBox="0 0 120 120" iconId="gitIcon"/>
                    <Icon height="120" width="120" viewBox="0 0 120 120" iconId="greensockIcon"/>
                    <Icon height="120" width="120" viewBox="0 0 120 120" iconId="vscodeIcon"/>
                    <Icon height="120" width="120" viewBox="0 0 120 120" iconId="githubIcon"/>
                </FlexWrapper>
            </Container>
        </Section>
    )
}

const SubTitle = styled.h3`
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    margin: 30px 0 200px 0;
`
