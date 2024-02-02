import styled from "styled-components";
import { Icon } from "../Icon/Icon";

export function SocialPanel(){
    return(
        <div>
            <Socials>
                <li><a href=""><Icon iconId = {'githubSocialIcon'}/></a></li>
                <li><a href=""><Icon iconId = {'twitterSocialIcon'}/></a></li>
                <li><a href=""><Icon iconId = {'linkedInSocialIcon'}/></a></li>
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