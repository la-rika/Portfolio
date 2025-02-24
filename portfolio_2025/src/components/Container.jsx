import "../index.css"

const Container = ({children, className})=>{
    return(
        <div className={ `${className && className} px-16 w-screen min-h-screen mb-40` }>
            {children}
        </div>
    )
}

export default Container;