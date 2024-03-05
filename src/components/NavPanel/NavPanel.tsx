import styled from "styled-components";
import { SocialPanel } from "../SocialPanel/SocialPanel";
import { Link } from "react-router-dom";

export function NavPanel(){
    return(
        <NavigationPanel>
            <NavButtons>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Tech Stack</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contacts">Contact</Link></li>
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
`
export const NavButtons = styled.ul`
    color: rgb(102, 102, 102);
    font-family: DM Sans;
    font-size: 20px;
    font-weight: 500;
    display: flex;
    gap: 60px;
`
