import styled from "styled-components";
import {NavPanel} from "./NavPanel/NavPanel";
import { Container } from "../../components/Container/Container";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapp";
import { MobileNavigationMenu } from "./MobileNavigationMenu/MobileNavigationMenu";
import { Link } from "react-router-dom";
import gradientLogo from "../../assets/images/logo_gradient.png"

export function Header(){
    return(
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Link to ="/"><img src={gradientLogo} alt="Gradient Logo image" /></Link>
                    <NavPanel />
                    <MobileNavigationMenu />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}


const StyledHeader = styled.header`
    margin-top: 75px;
`