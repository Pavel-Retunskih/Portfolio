import styled from "styled-components";
import photo from "../../assets/images/Photo.jpg"
import abstract from "../../assets/images/Abstract.png"
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapp";
import { Container } from "../../components/Container/Container";
import { GradientText } from "../../components/GradientText/GradientText";
export function Main(){
    return(
        <MainWrapp>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <MainTitle>
                        Hi 👋,<br/>
                        My name is<br/>
                        <GradientText font= {"Poppins"}>Pavan MG</GradientText><br/>
                        I build things for web<br/>
                    </MainTitle>
                    <MainImageContainer>
                        <MainImage src={`${photo}`} alt="Main Image" />
                        <AbstractImage src = {`${abstract}`}/>
                    </MainImageContainer>    
                    
                </FlexWrapper>
            </Container>
        </MainWrapp>
    )
}

const MainWrapp = styled.section`
margin-top: 210px;
`
const MainTitle = styled.h1`
    font-family: Poppins;
    font-size: 58px;
    font-weight: 700;
    line-height: 70px;
    text-align: left;
    color: #D9D9D9;
`
const MainImage = styled.img`
    width: 349px;
    height: 349px;
    border-radius: 230px;
`
const AbstractImage = styled.img`
    position: absolute;
    top: -150px;
    left: -150px;
    width: 627px;
    height: 627px;
`
const MainImageContainer = styled.div`
    position: relative;
`