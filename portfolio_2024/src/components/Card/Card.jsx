import "../../index.css"

const Card = ({ title, subtitle, content }) => {
    return (
            <div className="w-80 h-fit bg-light-pink p-4  rounded-3xl">
                <h4 className="text-black font-bold text-sm ">{title}</h4>
                {subtitle && <p className="text-black text-xs mt-4">{subtitle}</p>}
                <p className="text-black text-xs mt-8">{content}</p>
            </div>
    )
}

export default Card;