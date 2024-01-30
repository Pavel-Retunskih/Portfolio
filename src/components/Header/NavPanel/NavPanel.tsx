import styled from "styled-components";

function NavPanel(){
    return(
        <div>
            <NavButtons>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Tech Stack</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </NavButtons>
        </div>
    )
}

export default NavPanel;

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
