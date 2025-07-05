import { ReactComponent as FlowerImg } from "./images/flowe-background.svg"
import { TypeAnimation } from 'react-type-animation';
import Container from "./components/Container";
import { Element } from "react-scroll";

const Homepage = () => {
    return (
        <Element id='homepage' name='homepage'>
            <Container>
                <div className="lg:flex lg:justify-between">
                    <div className=" hidden lg:block lg:w-3/6 lg:h-[60rem]">
                        <FlowerImg className="absolute -top-12 -left-0 " />
                    </div>
                    <div className="mt-32 lg:items-center lg:mt-64 ">
                        <div className="leading-none mb-8">
                            <p className="text-white text-sm lg:text-md">Hello, I am</p>
                            <h1 className="font-fancy-text text-white text-xl lg:text-xxl font-bold">LARA MISIA<br />FORLANI</h1>
                        </div>
                        <div>
                            <p className="text-white text-sm lg:text-md">and I'm a</p>
                            <div className="lg:h-44 ">
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
                                    className="text-white text-md font-bold lg:text-lg lg:font-medium"
                                    repeat={Infinity}
                                />
                            </div>

                            {/* <h3 className="text-white text-lg font-medium">Frontend developer</h3> */}
                        </div>
                    </div>
                </div>
            </Container>
        </Element>
    )
}

export default Homepage;