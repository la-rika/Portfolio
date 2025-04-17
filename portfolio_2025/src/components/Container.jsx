import "../index.css"

const Container = ({children, className})=>{
    return(
        <div className={ ` px-24 w-screen  mb-36 ${className && className} ` }>
            {children}
        </div>
    )
}

export default Container;