import { Element } from "react-scroll";
import Container from "./components/Container";

const Projects = () => {
    return (
        <Element id='projects' name='projects'>
            <Container>
                <h1 className="text-white font-fancy-text text-xl mb-3">PROJECTS</h1>
            </Container>
        </Element>
    )
}

export default Projects;