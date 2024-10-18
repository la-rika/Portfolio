import { ReactComponent as GraduationIcon } from "../../images/graduation.svg"
import { ReactComponent as SuitcaseIcon } from "../../images/suitcase.svg"
import "../../index.css"
import Card from "../Card/Card"
import Container from "../Container"

const Timeline = ()=>{

    const history = [
        {
            title: "Accenture",
            subtitle: "Custom software engineer",
            skills:"React | BEM | Typerscript | tailwind | Next",
            date:"mar 2023 - present",
            type:"job"
        },
        {
            title: "The complete 2023 web development bootcamp from Udemy",
            skills:"html | css | js | jquery | bootstrap | unix | node | express | ejs | database | postgreSQL ",
            date:"oct 2022 - feb 2023",
            type:"formation"
        },
        {
            title: "Java e frontend with It Consulting ",
            skills:"Java | database | Mysql | servlet | JDBC  ",
            date:"nov 2022 - gen 2023",
            type:"formation"
        },
        {
            title: "Html css and javascript for web developers from Coursera",
            skills:"Html | css | js | responsive | bootstrap | ajax | OOP",
            date:"sep - oct 2022",
            type:"formation"
        },
        {
            title: "Liceo artistico Caravaggio",
            skills:"Story of animation | video editing | photography | photo editing | art | history of art",
            date:"sep 2017 - jul 2022",
            type:"formation"
        }
    ]

    return(
        <Container>
            {history.map((item,index)=>{
                return(
                        <div className="flex mt-3">
                            <div className="flex flex-col items-center gap-3">
                                <div className={`rounded-full  w-fit h-fit bg-dark-pink p-2.5 ${item.type === "formation" && "p-1.5"}`}>{item.type === "formation"?<GraduationIcon/>:<SuitcaseIcon/>}</div>
                                <div className="rounded-full w-0.5 h-full bg-dark-pink"></div>
                            </div>
                            <div className={`flex flex-col ml-3 gap-4 mt-3 ${index < history.length - 1 && "pb-10"}`}>
                                <p className="text-white-grey ml-1">{item.date}</p>
                                <Card title={item.title} subtitle={item.subtitle && item.subtitle} content={item.skills}/>
                            </div>
                        </div>
                )
            })}
        </Container>
    )
}

export default Timeline;