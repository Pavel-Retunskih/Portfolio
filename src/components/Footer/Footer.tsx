import styled from "styled-components";
import { Icon } from "../Icon/Icon";
import { Link } from "react-router-dom";
import logo_grey  from "../../assets/images/logo_grey.png";
import { FlexWrapper } from "../FlexWrapper/FlexWrapp";
import { NavButtons } from "../NavPanel/NavPanel";
export function Footer(){
    return(
        <FooterContainer>
            <StyledFlexWrapper align={"center"} justify={"space-between"}>
                <img src={`${logo_grey}`} alt="" />
                <FlexWrapper align={"center"} gap={"60px"}>
                    <span>+91 12345 09876</span>
                    <span>info@example.com</span>
                    <FlexWrapper align={"center"} gap={"20px"}>
                        <Icon iconId={"githubSocialIcon"} />
                        <Icon iconId={"twitterSocialIcon"} />
                        <Icon iconId={"linkedInSocialIcon"} />
                    </FlexWrapper>
                </FlexWrapper>
            </StyledFlexWrapper>
            <FlexWrapper align={"center"} justify={"space-between"}>
                <FlexWrapper align={"center"} justify={"space-between"}>
                        <NavButtons>
                            <li><Link to ="/">Home</Link></li>
                            <li><Link to = "/about">About</Link></li>
                            <li><Link to="/skills">Technologies</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contacts">Contact</Link></li>
                        </NavButtons>
                </FlexWrapper>
                    <p>Designed and built by Pavan MG with Love & Coffee</p>
            </FlexWrapper>
        </FooterContainer>
    )
}

const SocialIconLink = styled.a`

`
const FooterContainer = styled.footer`
    width: 100%;
    padding-bottom: 61px;
`
const StyledFlexWrapper = styled(FlexWrapper)`
    padding-bottom: 50px;
    border-bottom: 2px solid rgba(102, 102, 102, 0.3);
`