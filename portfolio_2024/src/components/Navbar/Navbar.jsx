import "../../index.css"

const Navbar = ()=>{
    return(
        <nav className="bg-dark-base w-full h-20 flex items-center justify-between px-16 fixed z-10">
            <p className="text-sm text-white cursor-pointer hover:font-extrabold">HOME</p>
            <p className="text-sm text-white cursor-pointer hover:font-extrabold">ABOUT</p>
            <p className="text-sm text-white cursor-pointer hover:font-extrabold">SKILLS</p>
            <p className="text-sm text-white cursor-pointer hover:font-extrabold">PROJECTS</p>
            <p className="text-sm text-white cursor-pointer hover:font-extrabold">CONTACT ME</p>
        </nav>
    )
}

export default Navbar;