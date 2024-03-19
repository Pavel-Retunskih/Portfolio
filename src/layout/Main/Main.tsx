import styled from "styled-components";
import photo from "../../assets/images/Photo.jpg"
import abstract from "../../assets/images/Abstract.png"
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapp";
import { Container } from "../../components/Container/Container";
import { GradientText } from "../../components/GradientText/GradientText";
import { Section } from "../../components/Section/Section";
import { Theme } from "../../styles/Theme";
import { font } from "../../styles/Common";
import { SideText } from "../../components/ui/SideText";


export function Main(){
    return(
        <Section>
            <Container>
                <FlexWrapper style={{padding:"100px 0 150px 0"}} align={"center"} justify={"space-between"} wrap={"wrap"}>
                        <FlexWrapper align={"flex-start"} justify={"space-beetwen"} direction={"column"} >
                            <SideText>
                                <TextSpan>Hi 👋,</TextSpan>
                            </SideText>
                            <SideText>
                                <TextSpan>My name is</TextSpan>
                            </SideText>
                            <SideText>
                                <TextSpan>
                                    <GradientText font= {"Poppins"} weight={700} lineHeight={"70px"} fmin={46} fmax={58}>Pavan MG</GradientText>
                                </TextSpan>
                            </SideText>    
                            <SideText>
                                <MainTitle>I build things for web</MainTitle>
                            </SideText>
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
    ${font({family:"Poppins", weight:700, lineHeight: "70px", Fmax:58, Fmin:46})};
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
    @media ${Theme.media.other}{
        margin-right: 0;
        width: 348px;
        height: 348px;
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
    @media ${Theme.media.other}{
        margin-right: 0;
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