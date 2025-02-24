
const SkillComponent = ({ skillImg, progress, name, level }) => {

    return (
        <div className="flex items-center">
            <div>
                {skillImg}
            </div>
            <div className="w-full ml-2">
                <p className="mb-2 text-white text-sm">{name}</p>
                <div className="h-3 w-full rounded-full bg-shadow-pink mb-2">
                    <div className={`bg-light-pink rounded-full h-full ${progress}`}></div>
                </div>
                <p className="mb-2 text-white ">skill level</p>
            </div>
        </div>
    )
}

export default SkillComponent;