import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapp"

type EducationPropsType = {
    title: string
    working: string
    university: string
    period: string
}
export const educationData =[
    {position: "JBachelor in Electronics & Communication",
    workingHours: "Full Time",
    university: "Bangalore Instutute of Technology",
    workPeriod: "Aug 2015 - Dec 2020"
    }
]

export function Education(props : EducationPropsType){
    return(
        <EducationBox>
             <FlexWrapper justify={"space-between"}>
                <Speciality>{props.title}</Speciality>
                <span>{props.working}</span>
            </FlexWrapper>
            <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                <University>{props.university}</University>
                <EducationPeriod>{props.period}</EducationPeriod>
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
`
const University = styled.p`
    color: rgb(167, 167, 167);
    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 28px;
`


const EducationPeriod = styled(University)`
`