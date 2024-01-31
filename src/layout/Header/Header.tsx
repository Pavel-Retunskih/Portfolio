import styled from "styled-components";
import NavPanel from "../../components/NavPanel/NavPanel";
import SocialPanel from "../../components/SocialPanel/SocialPanel";
import { Logo } from "../../components/Logo/Logo";

function Header(){
    return(
        <StyledHeader>
            <Logo/>
            <NavPanel/>
            <SocialPanel/>
        </StyledHeader>
    )
}

export default Header;


const StyledHeader = styled.header`
    display : flex;
    align-items : center;
    background-color: #5cde7a;
`