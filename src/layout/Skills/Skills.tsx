import styled from "styled-components";
import { Icon } from "../../components/Icon/Icon";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";

function Skills(){
    return(
        <div>
            <div>
                <SectionTitle>My Tech Stack</SectionTitle>
                <p> Technologies I've been working with recently</p>
            </div>
            <IconSkillsWrapp>
                <Icon height="120" width="120" viewBox="0 0 120 120" iconId="htmlIcon"/>
                <Icon height="120" width="120" viewBox="0 0 120 120" iconId="cssIcon"/>
                <Icon height="120" width="120" viewBox="0 0 120 120" iconId="jsIcon"/>
                <Icon height="120" width="120" viewBox="0 0 120 120" iconId="reactIcon"/>
                <Icon height="120" width="120" viewBox="0 0 120 120" iconId="reduxIcon"/>
                <Icon height="120" width="120" viewBox="0 0 120 120" iconId="bootstrapIcon"/>
                <Icon height="120" width="120" viewBox="0 0 120 120" iconId="tailwindIcon"/>
                <Icon height="120" width="120" viewBox="0 0 120 120" iconId="sassIcon"/>
                <Icon height="120" width="120" viewBox="0 0 120 120" iconId="gitIcon"/>
                <Icon height="120" width="120" viewBox="0 0 120 120" iconId="greensockIcon"/>
                <Icon height="120" width="120" viewBox="0 0 120 120" iconId="vscodeIcon"/>
                <Icon height="120" width="120" viewBox="0 0 120 120" iconId="githubIcon"/>
            </IconSkillsWrapp>
        </div>
    )
}

export default Skills;

const IconSkillsWrapp = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 100px;
`