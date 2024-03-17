import {createGlobalStyle } from "styled-components"
import { Theme } from "./Theme"

export const GlobalStyles = createGlobalStyle`
*, 
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}   
body{
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background-color: ${Theme.colors.primaryBg};

}
a{
    text-decoration: none;
    color: ${Theme.colors.navButtonsColor};
    z-index: 3;
}
ul{
    list-style: none;
}
h2{
    color: ${Theme.colors.sectionTitleColor};
    z-index: 3;
}
h3{
    color: ${Theme.colors.sectionSubTitleColor};
    z-index: 3;
}
p {
    color: ${Theme.colors.textColor};
    z-index: 3;
}
svg {
    z-index: 3;
}
`
