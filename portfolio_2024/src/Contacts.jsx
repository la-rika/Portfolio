import { Element } from "react-scroll";
import Container from "./components/Container";
import { ReactComponent as FlowerImg } from "./images/flowe-background.svg"


const Contacts = () => {
    return (
        <Element id='contact-me' name='contact-me'>
            <Container>
                <div className="w-full">
                    <FlowerImg className="absolute -top-12 -left-0 w-3/6 " />
                </div>
            </Container>
        </Element>
    )
}

export default Contacts;