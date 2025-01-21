
const Chip = ({ skillUsed})=>{
    return(
        <div className={`bg-chip-bg w-24 h-10 flex items-center justify-center rounded-full text-xs px-16 text-black`}>
            <p>{skillUsed}</p>
        </div>
    )
}

export default Chip;