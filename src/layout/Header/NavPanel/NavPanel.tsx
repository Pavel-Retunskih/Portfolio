import styled from "styled-components";
import { SocialPanel } from "../../../components/SocialPanel/SocialPanel";
import { Link } from "react-router-dom";
import { Theme } from "../../../styles/Theme";

export function NavPanel(){
    return(
        <NavigationPanel>
            <NavButtons>
                <li><Link to="/Portfolio/home">Home</Link></li>
                <li><Link to="/Portfolio/about">About</Link></li>
                <li><Link to="/Portfolio/skills">Tech Stack</Link></li>
                <li><Link to="/Portfolio/projects">Projects</Link></li>
                <li><Link to="/Portfolio/contacts">Contact</Link></li>
            </NavButtons>
            <SocialPanel />
        </NavigationPanel>
    )
}

const NavigationPanel = styled.nav`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 60px;
    @media ${Theme.media.tablet}{
        display: none;
    }
`
export const NavButtons = styled.ul`
    color: rgb(102, 102, 102);
    font-family: DM Sans;
    font-size: 20px;
    font-weight: 500;
    display: flex;
    gap: 60px;
`
