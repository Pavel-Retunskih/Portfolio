import styled from "styled-components";

export function SocialPanel(){
    return(
        <div>
            <Socials>
                <li><a href="">GitHub</a></li>
                <li><a href="">Twiter</a></li>
                <li><a href="">LinkedIn</a></li>
            </Socials>
        </div>
    )
}

const Socials = styled.ul`
    display: flex;
    gap: 20px;
    li{
        list-style: none;
        a{
            text-decoration: none;
        }
    }
`