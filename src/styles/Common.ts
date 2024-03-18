
type FontPropsTypes = {
    family ?: string
    weight ?: number
    color ?: string
    lineHeight ?: string
    Fmin ?: number
    Fmax ?: number
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax} : FontPropsTypes)=>`
    font-family : ${family || 'Poppins'};
    font-weight : ${weight || 400};
    color : ${color || "#666666"};
    line-height : ${lineHeight || 1.2};
    font-size : calc( (100vw - 360px)/(1600 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`

type GradientFontPropsTypes = {
    font ?: string
    weight ?: number
    Fmin ?: number
    Fmax ?: number
    lineHeight?: string
    gradient ?: string
}

export const gradientFont = ({font, weight, lineHeight, Fmax, gradient, Fmin}:GradientFontPropsTypes)=>`
    font-size : calc( (100vw - 360px)/(1600 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
    font-family : ${font || 'Poppins'};
    font-weight : ${weight || 400};
    line-height : ${lineHeight || "1.2"};
    background: ${gradient || "linear-gradient(90.00deg, rgb(19, 176, 245),rgb(231, 15, 170))"};
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    background-clip:text;
`