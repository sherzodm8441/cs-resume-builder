import React from "react"


export default function ProjectResume(props){
    return(
        <div className="project">
            <div className="projectLeft">
                <div style={{fontWeight: "bold"}} id="title">{props.title}</div>
                <div style={{fontWeight: "bold"}} id="link">{props.link}</div>
            </div>
            
            <div id="description">{props.description}</div>
        </div>
    )
}