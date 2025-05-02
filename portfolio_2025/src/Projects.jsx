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
        content: "You're having a party but forgot your favourite drink's recipe? No worries with Mix It Up your problem is solved. Find any recipe for alcoholic or non alcoholic drinks or just scroll trough the categories to get inspired.",
        link: "https://github.com/la-rika/mix_it_up_capstoneProject/tree/main",
        skills:["ejs","html","css","express","node.js","API"],
        screenshots: [
            <Mix1 className="w-full h-full" />, <Mix2 className="w-full h-full" />, <Mix3 className="w-full h-full" />
        ]
    },
    {
        title: "Recipes App",
        content: "With this app the daily question 'what should we eat for dinner?' doesn't exist anymore. Generate full courses and save your favourite ones in your personal online cookbook.",
        link: "https://github.com/la-rika/recipesApp_react",
        skills:["react","css","redux","bootstrap","node.js","express","mongoDB","mongoose"],
        screenshots: [
            <Recipes1 className="w-full h-full" />, <Recipes2 className="w-full h-full" />, <Recipes3 className="w-full h-full" />
        ]
    },
    {
        title: "Bts Quiz",
        content: "https://github.com/la-rika/quizApp_vanillaJs",
        link: "github link",
        skills:["html","css","js"],
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
                        <ProjectCard title={el.title} content={el.content} link={el.link} sourceCode={el.source} imgs={el.screenshots} skills={el.skills} />
                    ))}
                </div>
            </Container>
        </Element>
    )
}

export default Projects;