import { Element } from "react-scroll";
import Container from "./components/Container";
import { ReactComponent as Github } from "./images/github.svg";
import { ReactComponent as Linkedin } from "./images/linkedin.svg";
import { useState } from "react";
import Input from "./components/Input";


const Contacts = () => {

    const [formData, setFormaData] = useState({ firstName: "", lastName: "", email: "", message: "" });
    const [clicked, setClicked] = useState({ firstname: false, lastname: false, email: false, message: false })

    return (
        <Element id='contact-me' name='contact-me'>
            <Container className={"mb-0"}>
                <div className="w-full  flex flex-col justify-between">
                    <div className="flex gap-10">
                        <h1 className="text-white font-fancy-text text-xl mb-8">CONTACT ME</h1>
                        <div className="flex mt-7 gap-7">
                            <a href="https://github.com/la-rika" target="blank">
                                <Github />
                            </a>
                            <a href="https://www.linkedin.com/in/lara-misia-forlani-3b4612234/" target="blank">
                                <Linkedin />
                            </a>

                        </div>
                    </div>
                    <div role="button" >
                        <form className="flex flex-col w-1/2 gap-16">
                            <Input label={"First Name"} id={"firstname"} value={formData.firstName} onfocus={() => setClicked({ ...clicked, firstname: true })} onchange={(e) => setFormaData({ ...formData, firstName: e.target.value })} clicked={clicked.firstname} />
                            <Input label={"Last Name"} id={"lastname"} value={formData.lastName} onfocus={() => setClicked({ ...clicked, lastname: true })} onchange={(e) => setFormaData({ ...formData, lastName: e.target.value })} clicked={clicked.lastname} />
                            <Input label={"Email"} id={"email"} value={formData.email} onfocus={() => setClicked({ ...clicked, email: true })} onchange={(e) => setFormaData({ ...formData, email: e.target.value })} clicked={clicked.email} />
                            <Input isTextArea label={"Message"} id={"message"} value={formData.message} onfocus={() => setClicked({ ...clicked, message: true })} onchange={(e) => setFormaData({ ...formData, message: e.target.value })} clicked={clicked.message} />
                            <div>
                                <button>reset</button>
                                <button>send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </Element>
    )
}

export default Contacts;