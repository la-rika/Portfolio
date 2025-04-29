import Chip from "../Chip/Chip";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCard = ({ title, content, link, sourceCode, imgs }) => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="w-full grid grid-cols-3 gap-16 text-white">
            <Slider {...settings} className="w-full rounded-3xl ml-8"> 
                {imgs.map(el=>(
                    <div>
                        <img src={el} alt="progect img"/>
                    </div>
                ))}
            </Slider>

            <div className="flex flex-col gap-y-4 justify-center col-span-2 ml-8">
                <p className="text-lg font-medium ">{title} </p>
                <p>{content}</p>
                <p>Demo: {link}</p>
                <p className="mb-4">Source code: {sourceCode}</p>
                <Chip skillUsed={"javascript"} />
            </div>
        </div>
    )
}

export default ProjectCard;