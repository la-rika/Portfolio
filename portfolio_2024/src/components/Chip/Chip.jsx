
const Chip = ({color, skillUsed})=>{
    return(
        <div className={`bg-${color} w-24 h-10`}>
            {skillUsed}
        </div>
    )
}

export default Chip;