import "../index.css"

const Container = ({children, className})=>{
    return(
        <div className={ ` px-16 w-screen ${className && className} mb-52` }>
            {children}
        </div>
    )
}

export default Container;