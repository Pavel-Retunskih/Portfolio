import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapp"
import { Icon } from "../../../components/Icon/Icon"
import { Theme } from "../../../styles/Theme"
import { SideText } from "../../../components/ui/SideText"
import { SlideUp } from "../../../components/ui/SlideUp"


type CardStyledPropsType = {
    src: string
    cardTitle?: string
    cardDescription?: string
    cardStackDescription?: string

}
export function Card(props:CardStyledPropsType){
    return (
        <CardContainer>
            <SlideUp><img src={props.src} alt="" /></SlideUp>
            <Description>
                <SideText>
                    <Title>{props.cardTitle}</Title>
                </SideText>
                <SideText>
                    <Text>{props.cardDescription}</Text>
                </SideText>
                <SideText>
                    <Stack>{`Tech stack : ${props.cardStackDescription}`}</Stack>
                </SideText>
                <FlexWrapper justify={"space-between"} margin="0 0 25px 0">
                <SideText>
                    <CardLink href="#"> <Icon iconId = {"link-chainIcon"} width={"20"} height={"20"} viewBox = {"0 0 20 20"}/>Live Preview</CardLink>
                </SideText>    
                <SideText>    
                   <CardLink href="#"><Icon iconId = {"githubIcon"} width={"20"} height={"20"} viewBox = {"0 0 90 90"}/>View Code</CardLink>
                </SideText>
                </FlexWrapper>
            </Description>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
    width: 100%;
    max-width: 375px;
    @media ${Theme.media.tablet}{
        max-width: 360px;
    }
    border-radius: 20px;
    box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2);
    background: rgb(54, 54, 54);
    img{
        border-radius: 20px 20px 0 0;
        width: 100%;
    }
`
const Description = styled.div`
    padding: 0 30px;
    @media ${Theme.media.tablet}{
        padding: 0 10px;
    }
`

const Title = styled.h3`
    color: rgb(204, 204, 204);
    font-size: 28px;
    font-weight: 500;
    line-height: 1.2;
    margin: 27px 0 17px 0;
`
const Text = styled.p`
    color: rgb(204, 204, 204);
    font-size: 18px;
    font-weight: 300;
    line-height: 1.2;
`
const Stack = styled(Text)`
    font-size: 14px;
    margin: 12px 0 21px 0;
`
const CardLink = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    text-decoration-line: underline;
`