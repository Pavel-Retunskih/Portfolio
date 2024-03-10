import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapp"

export const experience = [
    {position: "Junior Web Developer",
    workingHours: "Full Time",
    company: "Dr. Rajkumar's Learning App",
    place: "Bengaluru",
    workPeriod: "Sep 2021 - Dec 2021"
    },
    {position: "Web Development Intern",
    workingHours: "Internship",
    company: "IonPixelz Web Solutions",
    place: "Bengaluru",
    workPeriod: "Sep 2021 - Dec 2021"
    },
    {position: "SEO / SEM Specialist",
    workingHours: "Internship",
    company: "HAAPS",
    place: "Bengaluru",
    workPeriod: "Sep 2021 - Dec 2021"
    },
]

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
            <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                <CompanyName>{props.company}</CompanyName>
                <Town>{props.place}</Town>
                <WorkigPeriod>{props.period}</WorkigPeriod>
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
`

const CompanyName = styled.p`
    color: rgb(167, 167, 167);
    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 28px;
`
const Town = styled(CompanyName)`

`

const WorkigPeriod = styled(CompanyName)`
    
`