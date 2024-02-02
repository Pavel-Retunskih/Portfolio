import styled from "styled-components";
import { Icon } from "../Icon/Icon";

export function SocialPanel(){
    return(
            <Socials>
                <li><a href=""><Icon height="30" width="30" viewBox="0 0 30 30" iconId = {'githubSocialIcon'}/></a></li>
                <li><a href=""><Icon height="30" width="30" viewBox="2 2 30 30" iconId = {'twitterSocialIcon'}/></a></li>
                <li><a href=""><Icon height="30" width="30" viewBox="0 0 30 30" iconId = {'linkedInSocialIcon'}/></a></li>
            </Socials>
    )
}

const Socials = styled.ul`
     padding-bottom: 23px;
    display: flex;
    gap: 20px;
    li{
        list-style: none;
        a{
            text-decoration: none;
        }
    }
`