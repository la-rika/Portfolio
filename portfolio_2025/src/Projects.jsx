import { Element } from "react-scroll";
import Container from "./components/Container";
import ProjectCard from "./components/ProjectCard/ProjectCard";

// const projects = [
//     {

//     }
// ]

const Projects = () => {
    return (
        <Element id='projects' name='projects'>
            <Container>
                <h1 className="text-white font-fancy-text text-xl mb-8">PROJECTS</h1>
                <div className="flex flex-col gap-y-14">
                    <ProjectCard link={"github link"} sourceCode={"github link"} />
                    <ProjectCard link={"github link"} sourceCode={"github link"} />
                    <ProjectCard link={"github link"} sourceCode={"github link"} />
                </div>
            </Container>
        </Element>
    )
}

export default Projects;