import styled from "styled-components";
import {NavPanel} from "./NavPanel/NavPanel";
import { Container } from "../../components/Container/Container";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapp";
import { MobileNavigationMenu } from "./MobileNavigationMenu/MobileNavigationMenu";
import { Link } from "react-router-dom";
import gradientLogo from "../../assets/images/logo_gradient.png"
import { Theme } from "../../styles/Theme";

const navButtonsData = [
    {
        link:"/Portfolio/",
        description:"Home"
    },
    {
        link:"/Portfolio/about",
        description:"About"
    },
    {
        link:"/Portfolio/skills",
        description:"Tech Stack"
    },
    {
        link:"/Portfolio/projects",
        description:"Projects"
    },
    {
        link:"/Portfolio/contacts",
        description:"Contact"
    }
]

export function Header(){
    return(
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"flex-start"}>
                    <Link to ="/Portfolio/"><img src={gradientLogo} alt={"Gradient Logo image"} /></Link>
                    <NavPanel items = {navButtonsData}/>
                    <MobileNavigationMenu items = {navButtonsData}/>
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