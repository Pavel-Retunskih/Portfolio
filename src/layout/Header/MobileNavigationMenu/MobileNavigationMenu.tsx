import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Theme } from "../../../styles/Theme";
import { Icon } from "../../../components/Icon/Icon";
import { useState } from "react";
import { navButtonsPropsType } from "../NavPanel/NavPanel";


export function MobileNavigationMenu(props:navButtonsPropsType){
    const[open, setOpen] = useState(false)
    function handleChange(){
        setOpen(!open)
    }
    return(
        <MobileNavigationPanel>
            <BurgerButton isOpen ={open} onClick={handleChange}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen ={open}>
                <ul>
                    {props.items.map(({link,description})=>
                        <li onClick={handleChange}><Link to={link}>{description}</Link></li>
                    )}
                    <ul>
                        <li><a href="#"><Icon height="30" width="30" viewBox="0 0 30 30" iconId = {'githubSocialIcon'}/></a></li>
                        <li><a href="#"><Icon height="30" width="30" viewBox="2 2 30 30" iconId = {'twitterSocialIcon'}/></a></li>
                        <li><a href="#"><Icon height="30" width="30" viewBox="0 0 30 30" iconId = {'linkedInSocialIcon'}/></a></li>
                    </ul>
                </ul>
            </MobileMenuPopup>
        </MobileNavigationPanel>
    )
}


const MobileNavigationPanel = styled.nav`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 60px;
    display: none;
    @media ${Theme.media.tablet}{
        display: block;
    }
`
const BurgerButton = styled.button<{isOpen: boolean}>`
    z-index: 999999999;
    border: none;
    background-color: rgba(164, 46, 46, 0);
    width: 36px;
    height: 36px;
    position: fixed;
    width: 200px;
    height: 240px;
    top: -100px;
    right: -100px;
    @media ${Theme.media.mobile} {
        top: -165px;
        right: -100px;
    }
    span{
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${Theme.colors.navButtonsColor};
        position: absolute;
        bottom: 40px;
        left: 50px;
        ${props => props.isOpen && css<{isOpen : boolean}>`
           width: 0;
           transition: 0.5;
        `}
        
        &::before{
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${Theme.colors.navButtonsColor};
            position: absolute;
            transform: translateY(-10px);
            transition:0.5s;
            ${props => props.isOpen && css<{isOpen : boolean}>`
                transform: translateY(0) rotate(-45deg);
                transition:0.5s;
            `}
        }
        
        &::after{
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${Theme.colors.navButtonsColor};
            position: absolute;
            transform: translateY(10px);
            transition:0.5s;
            ${props => props.isOpen && css<{isOpen : boolean}>`
                transform: translateY(0) rotate(45deg);
                transition:0.5s;
            `}
        }
    }
`
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    background-color: ${Theme.colors.primaryBg};
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 99999;
    display: none;
    ul{
        color: rgb(102, 102, 102);
        font-family: DM Sans;
        font-size: 20px;
        font-weight: 500;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        ul{
            display: flex;
            gap: 20px;
            flex-direction: row;
        }
    }

    ${props => props.isOpen && css <{isOpen : boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`