import { Element } from "react-scroll";
import Container from "./components/Container";
import ProjectCard from "./components/ProjectCard/ProjectCard";

const projects = [
    {
        title: "Project title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida augue at accumsan vestibulum.",
        link: "github link",
        source: "github link"
    },
    {
        title: "Project title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida augue at accumsan vestibulum.",
        link: "github link",
        source: "github link"
    },
    {
        title: "Project title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida augue at accumsan vestibulum.",
        link: "github link",
        source: "github link"
    },
    {
        title: "Project title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida augue at accumsan vestibulum.",
        link: "github link",
        source: "github link"
    },
    {
        title: "Project title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida augue at accumsan vestibulum.",
        link: "github link",
        source: "github link"
    },
]

const Projects = () => {
    return (
        <Element id='projects' name='projects'>
            <Container>
                <h1 className="text-white font-fancy-text text-xl mb-8">PROJECTS</h1>
                <div className="flex flex-col gap-y-14">
                    {projects.map((el)=>(
                        <ProjectCard title={el.title} content={el.content} link={el.link} sourceCode={el.source}/>
                    ))}
                </div>
            </Container>
        </Element>
    )
}

export default Projects;