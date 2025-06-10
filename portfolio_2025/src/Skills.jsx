import { Element } from "react-scroll";
import Container from "./components/Container";
import { ReactComponent as Html } from "./images/html.svg"
import { ReactComponent as Css } from "./images/css.svg"
import { ReactComponent as Javascript } from "./images/javascript.svg"
import { ReactComponent as Bootstrap } from "./images/bootstrap.svg"
import { ReactComponent as React } from "./images/react.svg"
import { ReactComponent as Node } from "./images/node.svg"
import { ReactComponent as Npm } from "./images/npm.svg"
import { ReactComponent as Express } from "./images/express.svg"
import { ReactComponent as Ejs } from "./images/ejs.svg"
import { ReactComponent as Bem } from "./images/bem.svg"
import { ReactComponent as Tailwind } from "./images/tailwind.svg"
import { ReactComponent as Typescript } from "./images/typescript.svg"
import { ReactComponent as Storybook } from "./images/storybook.svg"
import { ReactComponent as Sql } from "./images/sql.svg"
import { ReactComponent as Postgre } from "./images/postgre.svg"
import { ReactComponent as Mongodb } from "./images/mongodb.svg"
import { ReactComponent as Git } from "./images/git.svg"
import { ReactComponent as Redux } from "./images/redux.svg"
import { ReactComponent as Api } from "./images/api.svg"



const skills = [
    {
        name: "html",
        src: <Html />,
        progress: "confident"
    },
    {
        name: "css",
        src: <Css />,
        progress: "confident"
    },
    {
        name: "javascript",
        src: <Javascript />,
        progress: "confident"
    },
    {
        name: "bootstrap",
        src: <Bootstrap />,
        progress: "confident"
    },
    {
        name: "react",
        src: <React />,
        progress: "confident"
    },
    {
        name: "node",
        src: <Node />,
        progress: "beginner"
    },
    {
        name: "redux",
        src: <Redux />,
        progress: "Autonomous"
    },
    {
        name: "api",
        src: <Api />,
        progress: "Autonomous"
    },
    {
        name: "npm",
        src: <Npm />,
        progress: "confident"
    },
    {
        name: "express",
        src: <Express />,
        progress: "beginner"
    },
    {
        name: "ejs",
        src: <Ejs />,
        progress: "beginner"
    },
    {
        name: "bem",
        src: <Bem />,
        progress: "confident"
    },
    {
        name: "tailwind",
        src: <Tailwind />,
        progress: "confident"
    },
    {
        name: "typescript",
        src: <Typescript />,
        progress: "confident"
    },
    {
        name: "storybook",
        src: <Storybook />,
        progress: "beginner"
    },
    {
        name: "mongodb",
        src: <Mongodb />,
        progress: "beginner"
    },
    {
        name: "postgre",
        src: <Postgre />,
        progress: "beginner"
    },
    {
        name: "sql",
        src: <Sql />,
        progress: "beginner"
    },
    {
        name: "github",
        src: <Git />,
        progress: "Confident"
    },
]


const Skills = () => {
    return (
        <Element id='skills' name='skills'>
            <Container>
                <h1 className="text-white font-fancy-text text-xl mb-4 ">SKILLS</h1>

                <div>
                    <h1 className="text-white mb-1">Confident</h1>
                    <div className="flex flex-wrap gap-8 mb-10 items-center">
                        {skills.map(el => (
                            el.progress === "confident" &&
                            el.src
                        ))}
                    </div>
                </div>

                <div>
                    <h1 className="text-white mb-1">Autonomous</h1>
                    <div className="flex flex-wrap gap-8 mb-10 items-center">
                        {skills.map(el => (
                            el.progress === "Autonomous" &&
                            el.src
                        ))}
                    </div>
                </div>

                <div>
                    <h1 className="text-white mb-2">Beginner</h1>
                    <div className="flex flex-wrap gap-8 mb-10 items-center">
                        {skills.map(el => (
                            el.progress === "beginner" &&
                            el.src
                        ))}
                    </div>
                </div>

            </Container>
        </Element>
    )
}

export default Skills;