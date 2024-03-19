import styled from "styled-components";
import { Icon } from "../../components/Icon/Icon";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapp";
import { Container } from "../../components/Container/Container";
import { Section } from "../../components/Section/Section";
import { OpacityIn } from "../../components/ui/OpacityIn";
import { SideText } from "../../components/ui/SideText";

export function Skills(){
    return(
        <Section>
            <Container>
            <SideText>
                <SectionTitle>My Tech Stack</SectionTitle>
            </SideText>
            <SideText>
                <SubTitle> Technologies I've been working with recently</SubTitle>
            </SideText>
                <FlexWrapper style={{marginTop:"100px"}} wrap={"wrap"} justify={"space-between"} gap = {"90px"}>
                    <OpacityIn><Icon height="120" width="120" viewBox="0 0 120 120" iconId="htmlIcon"/></OpacityIn>
                    <OpacityIn><Icon height="120" width="120" viewBox="0 0 120 120" iconId="cssIcon"/></OpacityIn>
                    <OpacityIn><Icon height="120" width="120" viewBox="0 0 120 120" iconId="jsIcon"/></OpacityIn>
                    <OpacityIn><Icon height="120" width="120" viewBox="0 0 113 100" iconId="reactIcon"/></OpacityIn>
                    <OpacityIn><Icon height="120" width="120" viewBox="0 0 105 105" iconId="reduxIcon"/></OpacityIn>
                    <OpacityIn><Icon height="120" width="120" viewBox="0 0 90 87" iconId="bootstrapIcon"/></OpacityIn>
                    <OpacityIn><Icon height="120" width="120" viewBox="10 15 115 115" iconId="tailwindIcon"/></OpacityIn>
                    <OpacityIn><Icon height="120" width="120" viewBox="0 0 120 105" iconId="sassIcon"/></OpacityIn>
                    <OpacityIn><Icon height="120" width="120" viewBox="0 0 105 105" iconId="gitIcon"/></OpacityIn>
                    <OpacityIn><Icon height="120" width="120" viewBox="10 0 120 120" iconId="greensockIcon"/></OpacityIn>
                    <OpacityIn><Icon height="120" width="120" viewBox="0 5 105 105" iconId="vscodeIcon"/></OpacityIn>
                    <OpacityIn><Icon height="120" width="120" viewBox="0 0 88 88" iconId="githubIcon"/></OpacityIn>
                </FlexWrapper>
            </Container>
        </Section>
    )
}

const SubTitle = styled.h3`
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    margin: 30px 0 110px 0;
`
