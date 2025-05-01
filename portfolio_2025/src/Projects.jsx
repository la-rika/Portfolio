import { Element } from "react-scroll";
import Container from "./components/Container";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import { ReactComponent as Mix1 } from "./images/mix1.svg";
import { ReactComponent as Mix2 } from "./images/mix2.svg";
import { ReactComponent as Mix3 } from "./images/mix3.svg";
import { ReactComponent as Quiz1 } from "./images/quiz1.svg";
import { ReactComponent as Quiz2 } from "./images/quiz2.svg";
import { ReactComponent as Quiz3 } from "./images/quiz3.svg";
import { ReactComponent as Recipes1 } from "./images/recipes1.svg";
import { ReactComponent as Recipes2 } from "./images/recipes2.svg";
import { ReactComponent as Recipes3 } from "./images/recipes3.svg";


const projects = [
    {
        title: "Mix It Up!",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida augue at accumsan vestibulum.",
        link: "github link",
        source: "github link",
        screenshots: [
            <Mix1 className="w-full h-full" />, <Mix2 className="w-full h-full" />, <Mix3 className="w-full h-full" />
        ]
    },
    {
        title: "Recipes App",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida augue at accumsan vestibulum.",
        link: "github link",
        source: "github link",
        screenshots: [
            <Recipes1 className="w-full h-full" />, <Recipes2 className="w-full h-full" />, <Recipes3 className="w-full h-full" />
        ]
    },
    {
        title: "Bts Quiz",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida augue at accumsan vestibulum.",
        link: "github link",
        source: "github link",
        screenshots: [
            <Quiz1 className="w-full h-full" />, <Quiz2 className="w-full h-full" />, <Quiz3 className="w-full h-full" />
        ]
    },

]


const Projects = () => {
    return (
        <Element id='projects' name='projects'>
            <Container>
                <h1 className="text-white font-fancy-text text-xl mb-8">PROJECTS</h1>
                <div className="flex flex-col gap-y-14">
                    {projects.map((el) => (
                        <ProjectCard title={el.title} content={el.content} link={el.link} sourceCode={el.source} imgs={el.screenshots} />
                    ))}
                </div>
            </Container>
        </Element>
    )
}

export default Projects;