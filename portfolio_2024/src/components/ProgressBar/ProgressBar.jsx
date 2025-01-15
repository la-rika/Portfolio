
const ProgressBar = ({progress})=>{
    console.log(progress)
    return(
        <div className="h-3 w-full rounded-full bg-shadow-pink">
            <div className={`bg-light-pink rounded-full h-full ${progress}`}></div>
        </div>
    )
}

export default ProgressBar;