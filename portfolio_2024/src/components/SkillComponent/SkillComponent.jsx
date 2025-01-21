
const SkillComponent = ({ skillImg, progress, name, level }) => {

    return (
        <div className="flex items-center">
            <div>
                {skillImg}
            </div>
            <div className="w-full ml-2">
                <p className="mb-2 text-white">{name}  -  {level}</p>
                <div className="h-3 w-full rounded-full bg-shadow-pink">
                    <div className={`bg-light-pink rounded-full h-full ${progress}`}></div>
                </div>
            </div>
        </div>
    )
}

export default SkillComponent;