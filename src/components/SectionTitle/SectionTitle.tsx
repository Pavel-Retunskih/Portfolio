import styled from "styled-components";
import { font } from "../../styles/Common";

type SectionTitlePropsType = {
    size?: string
    padding?: string
    weight?: number
    lineHeight?: string
    marginBottom?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    ${font({weight: 700, lineHeight: "26px", Fmax: 42, Fmin: 36, color: "#CCCCCC"} )}
    margin-bottom: ${props => props.marginBottom || "38px"};
    line-height: 1;
`