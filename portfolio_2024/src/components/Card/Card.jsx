import "../../index.css"
import Container from "../Container";

const Card = ({ title, subtitle, content }) => {
    return (
        <Container>
            <div className="w-72 h-fit bg-light-pink">
                <h4 className="text-black font-fancy-text text-md">{title}</h4>
                {subtitle && <p className="text-black text-xs">{subtitle}</p>}
                <p className="text-black text-xs">{content}</p>
            </div>
        </Container>
    )
}

export default Card;