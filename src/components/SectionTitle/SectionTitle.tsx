import styled from "styled-components";

type SectionTitlePropsType = {
    size?: string
    padding?: string
    weight?: number
    lineHeight?: string
    marginBottom?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    font-size: ${props=>props.size || "42px"};
    font-weight: ${props => props.weight || 700};
    line-height: ${props => props.lineHeight || "26px"};
    margin-bottom: ${props => props.marginBottom || "38px"};
`