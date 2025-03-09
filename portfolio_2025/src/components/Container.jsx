import "../index.css"

const Container = ({children, className})=>{
    return(
        <div className={ ` px-16 w-screen  mb-52 ${className && className} ` }>
            {children}
        </div>
    )
}

export default Container;