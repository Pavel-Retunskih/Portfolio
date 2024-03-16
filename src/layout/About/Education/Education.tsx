import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapp"
import { Theme } from "../../../styles/Theme"
import { Icon } from "../../../components/Icon/Icon"

type EducationPropsType = {
    title: string
    working: string
    university: string
    period: string
}


export function Education(props : EducationPropsType){
    return(
        <EducationBox>
             <FlexWrapper justify={"space-between"}>
                <Speciality>{props.title}</Speciality>
                <span>{props.working}</span>
            </FlexWrapper>
            <FlexWrapper justify={"space-between"} wrap={"wrap"} margin = {"10px 0 0 0"}>
                <FlexWrapper gap={"7px"} align={"center"}>
                    <Icon iconId={"office-building"} width={"9"} height={"9"} viewBox={"3 1 10 10"} />
                    <University>{props.university}</University>
                </FlexWrapper>
                <FlexWrapper gap={"7px"} align={"center"}>
                    <Icon iconId={"calendar"} width={"9"} height={"9"} viewBox={"2 0 12 11"} />
                    <EducationPeriod>{props.period}</EducationPeriod>
                </FlexWrapper>
            </FlexWrapper>
        </EducationBox>
    )
}

const EducationBox = styled.div`
    min-height: 75px;
    border-bottom: 2px solid grey;
    margin-bottom: 300px;
    padding-bottom: 20px;
    & span{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #25DAC5;
        font-size: 9px;
        font-weight: 600;
        width: 84px;
        height: 24px;
        color: #018C0F;
        border-radius: 12px;}
`

const Speciality = styled.h3`
    color: rgb(102, 102, 102);
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 1px;
    @media ${Theme.media.mobile}{
        max-width: 175px;}
`
const University = styled.p`
    color: rgb(167, 167, 167);
    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.2;
    max-width: 165px;
`


const EducationPeriod = styled(University)`
`