import "../index.css"

const Container = ({children, className})=>{
    return(
        <div className={ `px-7 mb-20 lg:px-24 w-screen  lg:mb-36 ${className && className} ` }>
            {children}
        </div>
    )
}

export default Container;