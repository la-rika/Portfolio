import { Link } from "react-scroll";
import "../../index.css"

const Navbar = () => {
    return (
        <nav className="bg-dark-base w-full h-20 flex items-center justify-between px-24 z-10  fixed top-0">
            <Link
                to="homepage"
                smooth={true}
                duration={500}
                offset={-100}
                className="text-sm text-white cursor-pointer hover:font-extrabold w-[130px]">HOME</Link>
            <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-100}
                className="text-sm text-white cursor-pointer hover:font-extrabold w-[130px]">ABOUT</Link>
            <Link
                to="skills"
                smooth={true}
                duration={500}
                offset={-100}
                className="text-sm text-white cursor-pointer hover:font-extrabold w-[130px]">SKILLS</Link>
            <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-100}
                className="text-sm text-white cursor-pointer hover:font-extrabold w-[130px]">PROJECTS</Link>
            <Link
                to="contact-me"
                smooth={true}
                duration={500}
                offset={-100}
                className="text-sm text-white cursor-pointer hover:font-extrabold w-[130px]">CONTACT ME</Link>
        </nav>
    )
}

export default Navbar;