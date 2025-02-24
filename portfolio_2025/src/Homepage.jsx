import { ReactComponent as FlowerImg } from "./images/flowe-background.svg"
import { TypeAnimation } from 'react-type-animation';
import Container from "./components/Container";
import { Element } from "react-scroll";

const Homepage = () => {
    return (
        <Element  id='homepage' name='homepage'>
            <Container className={"mb-[22rem]"}>
                <div className="flex justify-between">
                    <div className="w-3/6">
                        <FlowerImg className="absolute -top-12 -left-0 " />
                    </div>
                    <div className="w-2/4  items-center mt-64">
                        <div className="leading-none mb-8">
                            <p className="text-white text-md">Hello, I am</p>
                            <h1 className="font-fancy-text text-white text-xxl font-bold">LARA MISIA<br />FORLANI</h1>
                        </div>
                        <div>
                            <p className="text-white text-md">and I am a</p>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    '',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Junior Frontend Developer',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    // 'Junior Fullstack Developer',
                                    // 1000
                                ]}
                                wrapper="span"
                                speed={35}
                                className="text-white text-lg font-medium"
                                repeat={Infinity}
                            />
                            {/* <h3 className="text-white text-lg font-medium">Frontend developer</h3> */}
                        </div>
                    </div>
                </div>
            </Container>
        </Element>
    )
}

export default Homepage;