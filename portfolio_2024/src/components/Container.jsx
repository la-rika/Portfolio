import "../index.css"

const Container = ({children, last})=>{
    return(
        <div className={!last ? "px-16 h-screen w-screen mb-40" : "px-16 h-screen w-screen"}>
            {children}
        </div>
    )
}

export default Container;