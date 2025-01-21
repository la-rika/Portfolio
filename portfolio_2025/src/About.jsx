import { Element } from "react-scroll"
import Container from "./components/Container"
import Timeline from "./components/Timeline/Timeline"

const About = () => {
    return (
        <Element  id='about' name='about'>
            <Container className="grid grid-cols-2">
                <Timeline />
                <div>
                    <h1 className="text-white font-fancy-text text-xl mb-3">ABOUT ME</h1>
                    <p className="text-white leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida augue at accumsan vestibulum. Pellentesque euismod at diam vel consectetur. Fusce rhoncus, enim sit amet lobortis sollicitudin, eros arcu commodo lorem, id aliquet ex elit a massa. Sed vel consequat ante. Duis ac tellus semper ligula tempus blandit quis eget.</p>
                </div>
            </Container>
        </Element>
    )
}

export default About