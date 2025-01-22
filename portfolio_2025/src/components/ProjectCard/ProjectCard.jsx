import Chip from "../Chip/Chip";

const ProjectCard = ({title, content, link, sourceCode}) => {
    return (
        <div className="w-full grid grid-cols-3 text-white">
            <div className="w-full h-72 bg-light-pink rounded-3xl">

            </div>

            <div className="flex flex-col gap-y-4 justify-center col-span-2 ml-8">
                <p className="text-lg font-medium ">{title} </p>
                <p>{content}</p>
                <p>Demo: {link}</p>
                <p className="mb-4">Source code: {sourceCode}</p>
                <Chip  skillUsed={"javascript"}/>
            </div>
        </div>
    )
}

export default ProjectCard;