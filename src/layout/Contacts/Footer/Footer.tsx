import styled from "styled-components";
import { Icon } from "../../../components/Icon/Icon";
import { Link } from "react-router-dom";
import logo_grey  from "../../../assets/images/logo_grey.png";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapp";
import { NavButtons } from "../../Header/NavPanel/NavPanel";
import { GradientText } from "../../../components/GradientText/GradientText";
export function Footer(){
    return(
        <FooterContainer>
            <StyledFlexWrapper align={"center"} justify={"space-between"}>
                <img src={`${logo_grey}`} alt="" />
                <FlexWrapper align={"center"} gap={"60px"}>
                    <span>+91 12345 09876</span>
                    <span>info@example.com</span>
                    <FlexWrapper align={"center"} gap={"20px"}>
                    <SocialIconLink><Icon iconId={"githubSocialIcon"} /></SocialIconLink>
                    <SocialIconLink><Icon iconId={"twitterSocialIcon"} /></SocialIconLink>
                    <SocialIconLink><Icon iconId={"linkedInSocialIcon"} /></SocialIconLink>
                    </FlexWrapper>
                </FlexWrapper>
            </StyledFlexWrapper>
            <FlexWrapper align={"center"} justify={"space-between"}>
                <FlexWrapper align={"center"} justify={"space-between"}>
                        <NavButtons>
                            <li><Link to ="/Portfolio/">Home</Link></li>
                            <li><Link to = "/Portfolio/about">About</Link></li>
                            <li><Link to="/Portfolio/skills">Technologies</Link></li>
                            <li><Link to="/Portfolio/projects">Projects</Link></li>
                            <li><Link to="/Portfolio/contacts">Contact</Link></li>
                        </NavButtons>
                </FlexWrapper>
                    <p>Designed and built by <GradientText size={"18px"}>Pavan MG</GradientText> with <GradientText size={"18px"}>Love</GradientText> & <GradientText size={"18px"}>Coffee</GradientText></p>
            </FlexWrapper>
        </FooterContainer>
    )
}

const SocialIconLink = styled.a`
    color: #42446E;
`
const FooterContainer = styled.footer`
    width: 100%;
    padding-bottom: 61px;
`
const StyledFlexWrapper = styled(FlexWrapper)`
    padding-bottom: 50px;
    border-bottom: 2px solid rgba(102, 102, 102, 0.3);
    margin-bottom: 40px;
`