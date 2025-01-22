import { Element } from "react-scroll";
import Container from "./components/Container";
import { ReactComponent as FlowerImg } from "./images/flowe-background.svg"
import { ReactComponent as Github } from "./images/github.svg";
import { ReactComponent as Linkedin } from "./images/linkedin.svg";


const Contacts = () => {
    return (
        <Element id='contact-me' name='contact-me'>
            <Container >
                <div className="w-full  flex justify-between">
                    <div className="flex">
                        <h1 className="text-white font-fancy-text text-xl mb-8">CONTACT ME</h1>
                        <div className="flex mt-7">
                            <Github />
                            <Linkedin />
                        </div>
                    </div>
                    <div className="w-3/6 h-96">
                        <FlowerImg className="transform scale-x-[-1] relative bottom-52 right-28" />
                    </div>
                </div>
            </Container>
        </Element>
    )
}

export default Contacts;