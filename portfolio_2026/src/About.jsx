import { Element } from "react-scroll"
import Container from "./components/Container"
import Timeline from "./components/Timeline/Timeline"

const About = () => {
    return (
        <Element id='about' name='about'>
            <Container >
                <div>
                    <h1 className="text-white font-fancy-text text-xl ">ABOUT ME</h1>
                    <p className="text-white leading-7 my-4">
                        I am a really friendly person and i have a lot of hobbies. At the moment I'm focusing on upgrading my skills, in fact I'm currently attending a course on Coursera erogated by Goole about UX design. I want to keep evolving in the frontend field and also explore new areas of the development industry.
                    </p>
                </div>
                <Timeline />
            </Container>
        </Element>
    )
}

export default About