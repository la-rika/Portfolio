import { useState } from "react";
import Chip from "../Chip/Chip";
import { ReactComponent as Arrow } from "../../images/arrow.svg"

const ProjectCard = ({ title, content, link, sourceCode, imgs }) => {
    const [count, setCount] = useState(0)

    return (
        <div className="w-full flex text-white">
            <div className="flex items-center gap-4 hover:cursor-pointer ">
                <button onClick={() => count !== 0 && setCount(count - 1)}>
                    <Arrow className={`w-8 h-8 rotate-180 hover:cursor-pointer ${count === 0 && "grayscale hover:cursor-not-allowed"}`} />
                </button>
                <div>
                    {imgs.map((el, index) => {
                        return (
                            count === index && <div>{el}</div>
                        )
                    })}
                    <div className="flex gap-2 justify-center">
                        <div className={`h-2 mt-4 w-8 rounded-full ${count === 0 ? "bg-light-pink" : "border-2 border-light-pink"}`}></div>
                        <div className={`h-2 mt-4 w-8 rounded-full ${count === 1 ? "bg-light-pink" : "border-2 border-light-pink"}`}></div>
                        <div className={`h-2 mt-4 w-8 rounded-full ${count === 2 ? "bg-light-pink" : "border-2 border-light-pink"}`}></div>
                    </div>
                </div>

                <button onClick={() => count < imgs.length - 1 && setCount(count + 1)}>
                    <Arrow className={`w-8 h-8 hover:cursor-pointer ${count === imgs.length - 1 && "grayscale hover:cursor-not-allowed"}`} />
                </button>
            </div>

            <div className="flex flex-col gap-y-4 justify-center col-span-2 ml-8">
                <p className="text-lg font-medium ">{title} </p>
                <p>{content}</p>
                <p>Demo: {link}</p>
                <p className="mb-4">Source code: {sourceCode}</p>
                <Chip skillUsed={"javascript"} />
            </div>
        </div>
    )
}

export default ProjectCard;