import styled from "styled-components";
import { Container } from "../../components/Container/Container";
import { Section } from "../../components/Section/Section";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapp";
import { Footer } from "./Footer/Footer";
import { GradientText } from "../../components/GradientText/GradientText";
export function Contacts(){
    return(
        <Section>
            <Container>
                <FlexWrapper direction="column" justify="center" align="center">
                    <SectionTitle>For any questions please mail me:</SectionTitle>
                    <GradientText>hi@pavanmg.in</GradientText>
                    <Footer/>
                </FlexWrapper>
            </Container>
        </Section>
       
    )
}

const Email = styled.span`
    
`