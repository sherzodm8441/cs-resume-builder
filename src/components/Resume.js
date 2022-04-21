import React from "react"


export default function Resume(props){

    return(
    <div className="resumeDetails">
        <div className="header">
            <div className="fullName">
                <h1>{props.values.firstName}</h1>
                <h1>{props.values.lastName}</h1>
            </div>
            <div className="personalDetails">
                <h3>{props.values.email}</h3>
                <h3>{props.values.portfolioLink}</h3>
                <h3>{props.values.location}</h3>
            </div>
        </div>
        {props.values.firstName && <div className="firstLine"></div>}
        <div className="education">
            <div className="educationHeader">
                {props.values.schoolName && <h2>Education</h2>}
            </div>
            <div id="classGrad">
                <div className="schoolName">
                    <h4 id="scoolName">{props.values.schoolName}</h4>
                    <p id="schoolLocation">{props.values.schoolLocation}</p>
        
                    <div id="degreeMajor">
                        <p id="degree">{props.values.degree}</p>
                        <p id="major">{props.values.major}</p>
                    </div>
                </div>
                <div className="graduation">
                    <p>{props.values.graduation}</p>
                </div>
            </div>
            <div>
                {props.values.courses && <p>Relevent Coursework: {props.values.courses}</p>}
            </div>
        </div>

        {props.values.schoolName && <div className="firstLine"></div>}

        <div className="workExp">
            <div className="workExpHeader">
                {props.workExp.workPlace1 && <h2>Work Experience</h2>}
            </div>

            <div className="exps">
                <div className="exp">
                    <div className="expLeft">
                        <div id="workplace">{props.workExp.workPlace1}</div>
                        <div id="position">{props.workExp.position1}</div>
                        <div id="startEnd">{props.workExp.startEnd1}</div>
                    </div>
                    
                    <div id="responsibilities">{props.workExp.responsibilities1}</div>
                </div>
                <div className="exp">
                    <div className="expLeft">
                        <div id="workplace">{props.workExp.workPlace2}</div>
                        <div id="position">{props.workExp.position2}</div>
                        <div id="startEnd">{props.workExp.startEnd2}</div>
                    </div>
                    
                    <div id="responsibilities">{props.workExp.responsibilities2}</div>
                </div>
                <div className="exp">
                    <div className="expLeft">
                        <div id="workplace">{props.workExp.workPlace3}</div>
                        <div id="position">{props.workExp.position3}</div>
                        <div id="startEnd">{props.workExp.startEnd3}</div>
                    </div>
                    
                    <div id="responsibilities">{props.workExp.responsibilities3}</div>
                </div>
                <div className="exp">
                    <div className="expLeft">
                        <div id="workplace">{props.workExp.workPlace4}</div>
                        <div id="position">{props.workExp.position4}</div>
                        <div id="startEnd">{props.workExp.startEnd4}</div>
                    </div>
                    
                    <div id="responsibilities">{props.workExp.responsibilities4}</div>
                </div>
            </div>
        </div>

        {props.projects.title1 && <div className="firstLine"></div>}

        <div className="projectsSection">
            <div className="projectsHeader">
                {props.projects.title1 && <h2>Projects</h2>}
            </div>

            <div className="projects">
                <div className="project">
                        <div className="projectLeft">
                            <div id="title">{props.projects.title1}</div>
                            <div id="link">{props.projects.link1}</div>
                        </div>
                        
                        <div id="description">{props.projects.description1}</div>
                </div>
                <div className="project">
                        <div className="projectLeft">
                            <div id="title">{props.projects.title2}</div>
                            <div id="link">{props.projects.link2}</div>
                        </div>
                        
                        <div id="description">{props.projects.description2}</div>
                </div>
                <div className="project">
                        <div className="projectLeft">
                            <div id="title">{props.projects.title3}</div>
                            <div id="link">{props.projects.link3}</div>
                        </div>
                        
                        <div id="description">{props.projects.description3}</div>
                </div>
            </div>
        </div>
    </div>
    )
}