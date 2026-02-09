
const Chip = ({ skillUsed, bg }) => {

    return (
        <div className={`w-24 h-10 flex items-center justify-center rounded-full text-xs px-10 text-black bg-light-pink `}>
            <p>{skillUsed}</p>
        </div>
    )
}

export default Chip;