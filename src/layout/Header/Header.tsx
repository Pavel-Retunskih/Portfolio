import styled from "styled-components";
import {NavPanel} from "../../components/NavPanel/NavPanel";
import { Logo } from "../../components/Logo/Logo";

function Header(){
    return(
        <StyledHeader>
            <Logo/>
            <NavPanel/>
        </StyledHeader>
    )
}

export default Header;


const StyledHeader = styled.header`
    margin: 0 auto;
    display : flex;
    flex-wrap: wrap;
    align-items : center;
    justify-content: space-between;
`