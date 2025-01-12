import { Element } from "react-scroll";
import Container from "./components/Container";
import Skill from "./components/SkillComponent/SkillComponent";
import { ReactComponent as Html } from "./images/html.svg"
import { ReactComponent as Css } from "./images/css.svg"
import { ReactComponent as Javascript } from "./images/javascript.svg"

const Skills = () => {
    return (
        <Element id='skills' name='skills'>
            <Container>
                <h1 className="text-white font-fancy-text text-xl mb-5">SKILLS</h1>
                <div className="grid grid-cols-3 gap-x-16 ">
                    <Skill skillImg={<Html />} progress={"w-[95%]"} name={"HTML"} level={"Advanced"}/>
                    <Skill skillImg={<Css />} progress={"w-[80%]"} name={"CSS"} level={"Advanced"}/>
                    <Skill skillImg={<Javascript />} progress={"w-[70%]"} name={"Javascript"} level={"Intermediate"}/>
                </div>
            </Container>
        </Element>
    )
}

export default Skills;