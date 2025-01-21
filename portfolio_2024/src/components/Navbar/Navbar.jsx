import { Link } from "react-scroll";
import "../../index.css"

const Navbar = () => {
    return (
        <nav className="bg-dark-base w-full h-20 flex items-center justify-between px-16 z-10  fixed top-0">
            <Link
                to="homepage"
                spy={true}
                smooth={true}
                duration={500}
                className="text-sm text-white cursor-pointer hover:font-extrabold">HOME</Link>
            <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="text-sm text-white cursor-pointer hover:font-extrabold">ABOUT</Link>
            <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                className="text-sm text-white cursor-pointer hover:font-extrabold">SKILLS</Link>
            <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                className="text-sm text-white cursor-pointer hover:font-extrabold">PROJECTS</Link>
            <Link
                to="contact-me"
                spy={true}
                smooth={true}
                duration={500}
                className="text-sm text-white cursor-pointer hover:font-extrabold">CONTACT ME</Link>
        </nav>
    )
}

export default Navbar;