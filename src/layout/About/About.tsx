import { Container } from "../../components/Container/Container";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";

export function About(){
    return(
        <section>
            <Container>
                <div>
                    <SectionTitle>About Me</SectionTitle>
                    <p>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</p>
                </div>
                <div>
                    <SectionTitle>Work Experience</SectionTitle>
                    <div>
                        <h3>Junior Web Developer</h3>
                        <span>Full Time</span>
                        <span>Dr. Rajkumar's Learning App</span>
                        <span>Bengaluru</span>
                        <span>Sep 2021 - Dec 2021</span>
                    </div>
                    <div>
                        <h3>Web Development Intern</h3>
                        <span>Internship</span>
                        <span>IonPixelz Web Solutions</span>
                        <span>Bengaluru</span>
                        <span>Sep 2021 - Dec 2021</span>
                    </div>
                    <div>
                        <h3>SEO / SEM Specialist</h3>
                        <span>Internship</span>
                        <span>HAAPS</span>
                        <span>Bengaluru</span>
                        <span>Sep 2021 - Dec 2021</span>
                    </div>
                </div>
                <div>
                    <SectionTitle>Education</SectionTitle>
                    <div>
                        <h3>Bachelor in Electronics & Communication</h3>
                        <span>Full Time</span>
                        <span>Bangalore Instutute of Technology</span>
                        <span>Aug 2015 - Dec 2020</span>
                    </div>
                </div>
            </Container>
        </section>
    )
}
