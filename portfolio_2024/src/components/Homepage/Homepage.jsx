import "../../index.css";
import {ReactComponent as FlowerImg} from "../../images/flowe-background.svg"

const Homepage = ()=>{
    return(
        <div className="flex justify-between px-16">
            <div>
            <FlowerImg className="absolute -top-24 -left-0 w-3/6 "/>
            </div>
            <div className="w-2/4  items-center mt-64">
                <div className="leading-none mb-8">
                <p className="text-white text-md">Hello, I am</p>
                <h1 className="font-fancy-text text-white text-xxl font-bold">LARA MISIA<br/>FORLANI</h1>
                </div>
                <div>
                <p className="text-white text-md">and I am a</p>
                <h3 className="text-white text-lg font-medium">Frontend developer</h3>
                </div>
            </div>
        </div>
    )
}

export default Homepage;