
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