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
import { ReactComponent as Scss } from "./images/scss.svg"
import { ReactComponent as Tailwind } from "./images/tailwind.svg"
import { ReactComponent as Typescript } from "./images/typescript.svg"



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
    }
]

const Skills = () => {
    return (
        <Element id='skills' name='skills'>
            <Container>
                <h1 className="text-white font-fancy-text text-xl ">SKILLS</h1>
                <p className="text-white mb-12">Nothing is at 100% because there's always something new that is waiting to be learned !</p>

                <div className="grid grid-cols-3 gap-x-16 gap-y-10 mb-10">
                    {skills.map(el => (
                        <Skill skillImg={el.src} progress={`w-[${el.progress}%]`} name={el.name.toUpperCase()}
                            level={Number(el.progress) <= 40 ? "Beginner" : Number(el.progress) > 40 && Number(el.progress) <= 70 ? "Intermediate" : "Advanced"} />
                    ))}
                </div>

            </Container>
        </Element>
    )
}

export default Skills;