import styled from "styled-components";
import {NavPanel} from "./NavPanel/NavPanel";
import { Logo } from "../../components/Logo/Logo";
import { Container } from "../../components/Container/Container";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapp";

export function Header(){
    return(
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <NavPanel/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}


const StyledHeader = styled.header`
    margin-top: 75px;
`