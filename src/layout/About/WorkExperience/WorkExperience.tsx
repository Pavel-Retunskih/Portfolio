import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapp"
import { Theme } from "../../../styles/Theme"
import { Icon } from "../../../components/Icon/Icon"



type WorkExperincePropsType = {
    title: string
    working: string
    company: string
    place: string
    period: string
}

export function WorkExperince (props : WorkExperincePropsType) {
    return(
        <CardBox>
            <FlexWrapper justify={"space-between"}>
                <JobTitle>{props.title}</JobTitle>
                <span>{props.working}</span>
            </FlexWrapper>
            <FlexWrapper justify={"space-between"} align="baseline" wrap={"wrap"} margin = {"10px 0 0 0"}>
                <SyledWrapper justify={"space-between"} wrap={"wrap"}>
                    <FlexWrapper gap={"7px"} align={"center"}>
                        <Icon iconId={"office-building"} width={"9"} height={"9"} viewBox={"3 1 10 10"} />
                        <CompanyName>{props.company}</CompanyName>
                    </FlexWrapper>
                    <FlexWrapper gap={"7px"} align={"center"}>
                        <Icon iconId={"location"} width={"9"} height={"9"} viewBox={"3 0 10 11"} />
                        <Town>{props.place}</Town>
                    </FlexWrapper>
                </SyledWrapper>
                <FlexWrapper gap={"7px"} align={"center"}>
                    <Icon iconId={"calendar"} width={"9"} height={"9"} viewBox={"2 0 12 11"} />
                    <WorkigPeriod>{props.period}</WorkigPeriod>
                </FlexWrapper>
            </FlexWrapper>
        </CardBox>
    )
}

const CardBox = styled.div`
    min-height: 75px;
    border-bottom: 2px solid grey;
    margin-bottom: 35px;
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
        border-radius: 12px;
    }
`
const JobTitle = styled.h3`
    color: rgb(102, 102, 102);
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 1px;
    @media ${Theme.media.mobile}{
        max-width: 175px;}
`

const CompanyName = styled.p`
    color: rgb(167, 167, 167);
    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.2;
`
const Town = styled(CompanyName)`
    @media ${Theme.media.mobile}{
        margin-top: 5px;
        max-width: 165px;
    }
`

const WorkigPeriod = styled(CompanyName)`

`
const SyledWrapper = styled(FlexWrapper)`
    max-width: 60%;
    flex-grow: 1;
    @media ${Theme.media.mobile}{
        flex-direction: column;
    }

`