import { Element } from "react-scroll";
import Container from "./components/Container";
import { ReactComponent as FlowerImg } from "./images/flowe-background.svg"


const Contacts = () => {
    return (
        <Element id='contact-me' name='contact-me'>
            <Container >
                <div className="w-full flex justify-between">
                    <p>         hfkjdsfhjdsfhksdfj</p>
                    <div className="w-3/6 h-96">
                        <FlowerImg className="transform scale-x-[-1] relative bottom-52 right-28" />
                    </div>
                </div>
            </Container>
        </Element>
    )
}

export default Contacts;