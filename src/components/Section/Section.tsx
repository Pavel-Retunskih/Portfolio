import styled from "styled-components";
import { Theme } from "../../styles/Theme";

type StyledSectionProps = {
    margintop ?: string,
    marginBottom ?: string
    overflow ?: string
}

export const Section = styled.section<StyledSectionProps>`
    margin-top: ${props => props.margintop || "150px"};
    margin-bottom: ${props => props.marginBottom || "150px"};
    overflow: ${props => props.overflow || "hidden"};
    @media ${Theme.media.mobile} {
        margin-top: 0;
        padding: 0 15px;
    }
`