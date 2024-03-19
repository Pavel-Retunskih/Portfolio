import styled from "styled-components";
import { font } from "../../styles/Common";

type SectionTitlePropsType = {
    size?: string
    padding?: string
    weight?: number
    lineHeight?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    ${font({weight: 700, lineHeight: "26px", Fmax: 42, Fmin: 36, color: "#CCCCCC"} )}
    line-height: 1;
`