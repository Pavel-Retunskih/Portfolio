import styled from "styled-components";
import NavPanel from "./NavPanel/NavPanel";
import SocialPanel from "./SocialPanel/SocialPanel";

function Header(){
    return(
        <HeaderWrapp>
            <img src="" alt="Logo" />
            <NavPanel/>
            <SocialPanel/>
        </HeaderWrapp>
    )
}

export default Header;


export const HeaderWrapp = styled.div`
    display : flex;
    align-items : center;
`