import { Element } from "react-scroll";
import Container from "./components/Container";
import Skill from "./components/SkillComponent/SkillComponent";
import { ReactComponent as Html } from "./images/html.svg"
import { ReactComponent as Css } from "./images/css.svg"
import { ReactComponent as Javascript } from "./images/javascript.svg"
import { ReactComponent as Bootstrap } from "./images/bootstrap.svg"
import { ReactComponent as React } from "./images/react.svg"
import { ReactComponent as Node } from "./images/node.svg"

const skills = [
    {
        name: "html",
        src: <Html />,
        progress: 95
    },
    {
        name: "css",
        src: <Css />,
        progress: 85
    },
    {
        name: "javascript",
        src: <Javascript />,
        progress: 70
    },
    {
        name: "bootstrap",
        src: <Bootstrap />,
        progress: 70
    },
    {
        name: "react",
        src: <React />,
        progress: 90
    },
    {
        name: "node",
        src: <Node />,
        progress: 70
    }
]

const Skills = () => {
    return (
        <Element id='skills' name='skills'>
            <Container>
                <h1 className="text-white font-fancy-text text-xl ">SKILLS</h1>
                <p className="text-white mb-12">Nothing is at 100% because there's always something new to learn !</p>

                <div className="grid grid-cols-3 gap-x-16 gap-y-10 mb-10"> 
                    {/* prende il progress solo del primo o di nessuno in base a come gli gira  */}
                    {skills.map(el => (
                        <Skill skillImg={el.src} progress={el.progress.toString()} name={el.name.toUpperCase()}
                            level={el.progress <= 40 ? "Beginner" : el.progress > 40 && el.progress <= 70 ? "Intermediate" : "Advanced"} />
                    ))}
                </div>

            </Container>
        </Element>
    )
}

export default Skills;