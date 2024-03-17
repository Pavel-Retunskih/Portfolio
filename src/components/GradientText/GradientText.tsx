import styled from "styled-components";
import { gradientFont } from "../../styles/Common";

type GradientTextTypeProps = {
    size?: string
    color?: string
    font?: string
    fmax?: number
    fmin?: number
    weight?: number
    lineHeight?: string

}
export const GradientText = styled.span<GradientTextTypeProps>`
    ${(props) =>  gradientFont({
    font: props.font,
    weight: props.weight,
    lineHeight: props.lineHeight,
    Fmax:props.fmax,
    Fmin:props.fmin,
    gradient:props.color
    })};
`