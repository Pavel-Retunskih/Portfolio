import styled from "styled-components";
import photo from "../../assets/images/Photo.jpg"
function Main(){
    return(
        <MainWrapp>
            <MainTitle>
            Hi 👋,<br/>
            My name is<br/>
            Pavan MG<br/>
            I build things for web<br/>
            </MainTitle>
            <MainImage src={`${photo}`} alt="Main Image" />
        </MainWrapp>
    )
}

export default Main;

const MainWrapp = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

`
const MainTitle = styled.h1`
    font-family: Poppins;
    font-size: 58px;
    font-weight: 700;
    line-height: 70px;
`
const MainImage = styled.img`
    width: 349px;
    height: 349px;
    border-radius: 230px;

`