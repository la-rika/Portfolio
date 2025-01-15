import ProgressBar from "../ProgressBar/ProgressBar";

const SkillComponent = ({ skillImg, progress, name, level }) => {

    return (
        <div className="flex items-center"> 
            <div>
                {skillImg}
            </div>
            <div className="w-full ml-2">
                <p className="mb-2 text-white">{name}  -  {level}</p>
                <ProgressBar progress={`${progress}`} />
            </div>
        </div>
    )
}

export default SkillComponent;