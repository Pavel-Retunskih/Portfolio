import styled from "styled-components";

function NavPanel(){
    return(
        <NavigationPanel>
            <NavButtons>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Tech Stack</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </NavButtons>
        </NavigationPanel>
    )
}

export default NavPanel;
const NavigationPanel = styled.nav`

`
const NavButtons = styled.ul`
    display: flex;
    gap: 60px;
    li {
        list-style: none;
        a{
            text-decoration: none;
        }
    }
`
