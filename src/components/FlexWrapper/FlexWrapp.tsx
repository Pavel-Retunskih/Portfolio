import styled from "styled-components"

type FlexWrapperPropsType = {
    direction?: string,
    justify?: string,
    align?: string,
    gap?: string,
    wrap?: string,
    margin?: string,
}


export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stratch'};
    gap: ${props => props.gap || '0'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    margin: ${props => props.margin}
`