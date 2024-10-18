import "../index.css"

const Container = ({children, last})=>{
    return(
        <div className={!last ? "px-16 min-h-fit w-screen h-screen mb-48" : "px-16 h-fit w-screen"}>
            {children}
        </div>
    )
}

export default Container;