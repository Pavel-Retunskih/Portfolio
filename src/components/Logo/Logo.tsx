import styled from "styled-components"
import { Icon } from "../Icon/Icon"

export function Logo(){
    return(
        <Link href="">
            <Icon height="59" width="97" viewBox="0 0 97 59" iconId = {'logoGradient'}/>
        </Link>
    )
}

const Link = styled.a`
    height: 59px;
`
