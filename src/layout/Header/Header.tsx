import styled from "styled-components";
import {NavPanel} from "./NavPanel/NavPanel";
import { Container } from "../../components/Container/Container";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapp";
import { MobileNavigationMenu } from "./MobileNavigationMenu/MobileNavigationMenu";
import { Link } from "react-router-dom";
import gradientLogo from "../../assets/images/logo_gradient.png"
import { Theme } from "../../styles/Theme";

export function Header(){
    return(
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Link to ="/Portfolio/"><img src={gradientLogo} alt={"Gradient Logo image"} /></Link>
                    <NavPanel />
                    <MobileNavigationMenu />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}


const StyledHeader = styled.header`
    margin-top: 75px;
    margin-bottom: 150px;
    @media ${Theme.media.mobile}{
        margin-top: 15px;
        margin-bottom: 50px;
    }
    @media ${Theme.media.other}{
        padding: 0 10px;
    }
`