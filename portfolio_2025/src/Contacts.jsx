import { Element } from "react-scroll";
import Container from "./components/Container";
import { ReactComponent as Github } from "./images/github.svg";
import { ReactComponent as Linkedin } from "./images/linkedin.svg";
import { useState } from "react";
import Input from "./components/Input";
import { useEffect } from "react";


const Contacts = () => {

    const [formData, setFormaData] = useState({ firstName: "", lastName: "", email: "", message: "" });
    const [clicked, setClicked] = useState({ firstname: false, lastname: false, email: false, message: false })
    const [emailSent, setEmailSent] = useState(false);

    useEffect(() => {
        setEmailSent(false)
    }, [formData])

    return (
        <Element id='contact-me' name='contact-me' >
            <Container className="!-mb-56">
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
                        <form className="flex flex-col w-1/2 gap-12 mt-8">
                            <Input label={"First Name"}
                                id={"firstname"}
                                value={formData.firstName}
                                onblur={() => setClicked({ ...clicked, firstname: false })}
                                onfocus={() => setClicked({ ...clicked, firstname: true })}
                                onchange={(e) => setFormaData({ ...formData, firstName: e.target.value })} c
                                clicked={clicked.firstname || formData.firstName}
                            />

                            <Input label={"Last Name"}
                                id={"lastname"}
                                value={formData.lastName}
                                onblur={() => setClicked({ ...clicked, lastname: false })}
                                onfocus={() => setClicked({ ...clicked, lastname: true })}
                                onchange={(e) => setFormaData({ ...formData, lastName: e.target.value })}
                                clicked={clicked.lastname || formData.lastName}
                            />

                            <Input label={"Email"}
                                id={"email"}
                                value={formData.email}
                                onblur={() => setClicked({ ...clicked, email: false })}
                                onfocus={() => setClicked({ ...clicked, email: true })}
                                onchange={(e) => setFormaData({ ...formData, email: e.target.value })}
                                clicked={clicked.email || formData.email}
                            />

                            <Input isTextArea label={"Message"}
                                id={"message"}
                                value={formData.message}
                                onblur={() => setClicked({ ...clicked, message: false })}
                                onfocus={() => setClicked({ ...clicked, message: true })}
                                onchange={(e) => setFormaData({ ...formData, message: e.target.value })}
                                clicked={clicked.message || formData.message}
                            />

                            <div className={`flex items-center justify-end gap-4`}>
                                {emailSent &&
                                    <p className="text-white font-bold">Email sent !</p>
                                }
                                <button
                                    onClick={() => setFormaData({ ...formData, firstName: "", lastName: "", email: "", message: "" })}
                                    type="button"
                                    className="rounded-full text-light-pink py-1 px-6 border-2 border-light-pink"
                                >
                                    reset
                                </button>

                                <button
                                    onClick={() => setEmailSent(true)}
                                    type="button"
                                    className="rounded-full text-base-color bg-light-pink py-1 px-6 border-2 border-light-pink"
                                >
                                    send
                                </button>

                            </div>
                        </form>
                    </div>
                </div>

            </Container>
        </Element>
    )
}

export default Contacts;