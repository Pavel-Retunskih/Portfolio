import styled from "styled-components";

type GradientTextTypeProps = {
    size?: string
    color?: string
    font?: string

}
export const GradientText = styled.span<GradientTextTypeProps>`
    background: ${props => props.color || "linear-gradient(90.00deg, rgb(19, 176, 245),rgb(231, 15, 170))"};
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    background-clip:text;
    font-family: ${props => props.font || "DM Sans"};
    font-size: ${props => props.size || "58px"};
    font-weight: 700;
    line-height: 70px;
`