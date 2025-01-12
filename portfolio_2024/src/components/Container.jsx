import "../index.css"

const Container = ({children, last, className})=>{
    return(
        <div className={!last ? `${className && className} px-16 w-screen min-h-screen mb-96` : `${className && className} px-16 min-h-screen w-screen`}>
            {children}
        </div>
    )
}

export default Container;