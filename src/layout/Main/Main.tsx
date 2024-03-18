import styled from "styled-components";
import photo from "../../assets/images/Photo.jpg"
import abstract from "../../assets/images/Abstract.png"
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapp";
import { Container } from "../../components/Container/Container";
import { GradientText } from "../../components/GradientText/GradientText";
import { Section } from "../../components/Section/Section";
import { Theme } from "../../styles/Theme";
import { font } from "../../styles/Common";


export function Main(){
    return(
        <Section margintop="200px" overflow="visible">
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                        <FlexWrapper align={"flex-start"} justify={"space-beetwen"} direction={"column"} >
                            <TextSpan>Hi 👋,</TextSpan>
                            <TextSpan>My name is</TextSpan>
                            <TextSpan><GradientText font= {"Poppins"} weight={700} lineHeight={"70px"} fmin={36} fmax={58}>Pavan MG</GradientText></TextSpan>
                            <MainTitle>I build things for web</MainTitle>
                        </FlexWrapper>
                    <MainImageWrapper>
                        <MainImage src={`${photo}`} alt="Main Image" />
                    </MainImageWrapper>
                </FlexWrapper>
            </Container>
        </Section>
    )
}

const MainTitle = styled.h1`
    ${font({family:"Poppins", weight:700, lineHeight: "70px", Fmax:58, Fmin:36})};
    letter-spacing: -1px;
    padding-top: 20px;
    text-align: left;
    color:#D9D9D9;
`
const MainImage = styled.img`
    width: 349px;
    height: 349px;
    border-radius: 230px;
    @media ${Theme.media.mobile} {
        width: 200px;
        height: 200px;
    }
`
const MainImageWrapper = styled.div`
    position: relative;
    overflow: visible;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 21px;
    @media ${Theme.media.mobile} {
        width: 300px;
        height: 300px;
        margin-top: 10px;
        margin-right: 0;
    }
    @media ${Theme.media.tablet}{
        margin: 0 auto;
        margin-top: 100px;
    }

    &::before{
        content: "";
        display: block;
        position: absolute;
        height: 627px;
        width: 627px;
        background-image: url(${abstract});
        background-size:cover;
        @media ${Theme.media.mobile} {
        width: 350px;
        height: 350px;
    }
    }
`
const TextSpan = styled.span`
    ${font({family:"Poppins", weight:700, lineHeight: "70px", Fmax:58, Fmin:36})};
    letter-spacing: -1px;
    padding-top: 20px;
    text-align: left;
    color:#D9D9D9;
`