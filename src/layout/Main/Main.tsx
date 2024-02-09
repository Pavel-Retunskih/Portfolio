import styled from "styled-components";
import photo from "../../assets/images/Photo.jpg"
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapp";
function Main(){
    return(
        <MainWrapp>
            <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                <MainTitle>
                    Hi 👋,<br/>
                    My name is<br/>
                    Pavan MG<br/>
                    I build things for web<br/>
                </MainTitle>
                <MainImage src={`${photo}`} alt="Main Image" />
            </FlexWrapper>
        </MainWrapp>
    )
}

export default Main;

const MainWrapp = styled.section`

`
const MainTitle = styled.h1`
    font-family: Poppins;
    font-size: 58px;
    font-weight: 700;
    line-height: 70px;
    text-align: left;
`
const MainImage = styled.img`
    width: 349px;
    height: 349px;
    border-radius: 230px;

`