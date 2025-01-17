import { Element } from "react-scroll";
import Container from "./components/Container";
import Skill from "./components/SkillComponent/SkillComponent";
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


const skills = [
    {
        name: "html",
        src: <Html />,
        progress: '95'
    },
    {
        name: "css",
        src: <Css />,
        progress: '85'
    },
    {
        name: "javascript",
        src: <Javascript />,
        progress: '70'
    },
    {
        name: "bootstrap",
        src: <Bootstrap />,
        progress: '70'
    },
    {
        name: "react",
        src: <React />,
        progress: '85'
    },
    {
        name: "node",
        src: <Node />,
        progress: '70'
    },
    {
        name: "npm",
        src: <Npm />,
        progress: '40'
    },
    {
        name: "express",
        src: <Express />,
        progress: '30'
    },
    {
        name: "ejs",
        src: <Ejs />,
        progress: '40'
    },
    {
        name: "bem",
        src: <Bem />,
        progress: '80'
    },
    {
        name: "tailwind",
        src: <Tailwind />,
        progress: '80'
    },
    {
        name: "typescript",
        src: <Typescript />,
        progress: '40'
    },
    {
        name: "storybook",
        src: <Storybook />,
        progress: '40'
    },
    {
        name: "mongodb",
        src: <Mongodb />,
        progress: '40'
    },
    {
        name: "postgre",
        src: <Postgre />,
        progress: '40'
    },
    {
        name: "sql",
        src: <Sql />,
        progress: '40'
    },
]

//se le barre dei db sono ancora buggate mettere 40%

const Skills = () => {
    return (
        <Element id='skills' name='skills'>
            <Container>
                <h1 className="text-white font-fancy-text text-xl ">SKILLS</h1>
                <p className="text-white mb-12">Nothing is at 100% because there's always something new that is waiting to be learned !</p>

                {/* <div className="grid grid-cols-3 gap-x-16 gap-y-10 mb-10">
                    <Skill skillImg={<Html />} progress={`w-[90%]`} name={"HTML"}
                        level="Advanced" />

                    <Skill skillImg={<Css />} progress={`w-[90%]`} name={"CSS"}
                        level="Advanced" />

                    <Skill skillImg={<Javascript />} progress={`w-[70%]`} name={"JAVASCRIPT"}
                        level="Intermediate" />

                    <Skill skillImg={<Bootstrap />} progress={`w-[70%]`} name={"BOOTSTRAP"}
                        level="Intermediate" />

                    <Skill skillImg={<React />} progress={`w-[85%]`} name={"REACT"}
                        level="Advanced" />

                    <Skill skillImg={<Node />} progress={`w-[40%]`} name={"NODE"}
                        level="Beginner" />

                    <Skill skillImg={<Npm />} progress={`w-[40%]`} name={"NPM"}
                        level="Beginner" />

                    <Skill skillImg={<Express />} progress={`w-[30%]`} name={"EXPRESS"}
                        level="Beginner" />

                    <Skill skillImg={<Ejs />} progress={`w-[30%]`} name={"EJS"}
                        level="Beginner" />

                    <Skill skillImg={<Bem />} progress={`w-[80%]`} name={"SCSS"}
                        level="Advanced" />

                    <Skill skillImg={<Tailwind />} progress={`w-[80%]`} name={"TAILWIND"}
                        level="Beginner" />

                    <Skill skillImg={<Typescript />} progress={`w-[40%]`} name={"TYPESCRIPT"}
                        level="Beginner" />
                </div> */}

                <div className="grid grid-cols-3 gap-x-16 gap-y-10 mb-10">
                    {skills.map(el => (
                        <Skill skillImg={el.src} progress={`w-[${el.progress}%]`} name={el.name.toUpperCase()}
                            level={Number(el.progress) <= 40 ? "Beginner" : Number(el.progress) > 40 && Number(el.progress) <= 80 ? "Intermediate" : "Advanced"} />
                    ))}
                </div>

            </Container>
        </Element>
    )
}

export default Skills;