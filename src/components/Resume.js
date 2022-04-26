import React from "react"



export default function Resume(props){

    return(
    <div className="resumeDetails">
        <div className="header">
            <div className="fullName">
                <h1>{props.values.firstName} {props.values.lastName}</h1>
            </div>
            <div className="personalDetails">
                <h3>{props.values.email}</h3>
                <h3>{props.values.phone}</h3>
                <h3>{props.values.location}</h3>
                <h3>{props.values.portfolioLink}</h3>
            </div>
        </div>
        {props.values.firstName && <div className="firstLine"></div>}
        <div className="education">
            <div className="educationHeader">
                {props.values.schoolName && <h2>Education</h2>}
            </div>
            <div id="classGrad">
                <div className="schoolName">
                    <div style={{fontWeight: "bold", fontSize: "15px"}} id="scoolName">{props.values.schoolName} </div> 
                    <div id="schoolLocation">{props.values.schoolLocation}</div>
                    
                     
                    <div id="degreeMajor">
                        <div id="degree">{props.values.degree}</div> 
                        <div id="graduation" >{props.values.graduation}</div>
                        
                    </div>
                  
                    
                </div>
                <div id="major">{props.values.major}</div>
                
            </div>
            <div className="relcourse">
                {props.values.courses && <p>Relevent Coursework: {props.values.courses}</p>}
            </div>
        </div>

        {props.values.schoolName && <div className="firstLine"></div>}

        <div className="workExp">
            <div className="workExpHeader">
                {/* {props.workExp.workPlace1 && <h2>Work Experience</h2>} */}
                {props.workExps.length !== 0 && props.workExps[0].workPlace && <h2>Work Experience</h2>}
            </div>

            <div className="exps">

                {/* workExp output */}
                {props.workExpResume}
                {/* <WorkExpResume 
                    workPlace={props.workExp.workPlace1}
                    position={props.workExp.position1}
                    startEnd={props.workExp.startEnd1}
                    responsibilities={props.workExp.responsibilities1}
                /> */}
                
                {/* <div className="exp">
                    <div className="expLeft">
                        <div style={{fontWeight: "bold"}} id="workplace">{props.workExp.workPlace1}</div>
                        <div style={{fontWeight: "bold"}} id="position">{props.workExp.position1}</div>
                        <div style={{fontWeight: "bold"}} id="startEnd">{props.workExp.startEnd1}</div>
                    </div>
                    
                    <div id="responsibilities">{props.workExp.responsibilities1}</div>
                </div>
                <div className="exp">
                    <div className="expLeft">
                        <div style={{fontWeight: "bold"}} id="workplace">{props.workExp.workPlace2}</div>
                        <div style={{fontWeight: "bold"}} id="position">{props.workExp.position2}</div>
                        <div style={{fontWeight: "bold"}} id="startEnd">{props.workExp.startEnd2}</div>
                    </div>
                    
                    <div id="responsibilities">{props.workExp.responsibilities2}</div>
                </div>
                <div className="exp">
                    <div className="expLeft">
                        <div style={{fontWeight: "bold"}} id="workplace">{props.workExp.workPlace3}</div>
                        <div style={{fontWeight: "bold"}} id="position">{props.workExp.position3}</div>
                        <div style={{fontWeight: "bold"}} id="startEnd">{props.workExp.startEnd3}</div>
                    </div>
                    
                    <div id="responsibilities">{props.workExp.responsibilities3}</div>
                </div>
                <div className="exp">
                    <div className="expLeft">
                        <div style={{fontWeight: "bold"}} id="workplace">{props.workExp.workPlace4}</div>
                        <div style={{fontWeight: "bold"}} id="position">{props.workExp.position4}</div>
                        <div style={{fontWeight: "bold"}} id="startEnd">{props.workExp.startEnd4}</div>
                    </div>
                    
                    <div id="responsibilities">{props.workExp.responsibilities4}</div>
                </div> */}
            </div>
        </div>

        {/* {props.projects.title1 && <div className="firstLine"></div>} */}
        {props.projects.length !== 0 && props.projects[0].title && <div className="firstLine"></div>}

        <div className="projectsSection">
            <div className="projectsHeader">
                {/* {props.projects.title1 && <h2>Projects</h2>} */}
                {props.projects.length !== 0 && props.projects[0].title && <h2>Projects</h2>}
            </div>

            <div className="projects">

                {/* project output */}
                {props.projectResume}
                
                {/* <div className="project">
                        <div className="projectLeft">
                            <div style={{fontWeight: "bold"}} id="title">{props.projects.title1}</div>
                            <div style={{fontWeight: "bold"}} id="link">{props.projects.link1}</div>
                        </div>
                        
                        <div id="description">{props.projects.description1}</div>
                </div>
                <div className="project">
                        <div className="projectLeft">
                            <div style={{fontWeight: "bold"}} id="title">{props.projects.title2}</div>
                            <div style={{fontWeight: "bold"}} id="link">{props.projects.link2}</div>
                        </div>
                        
                        <div id="description">{props.projects.description2}</div>
                </div>
                <div className="project">
                        <div className="projectLeft">
                            <div style={{fontWeight: "bold"}} id="title">{props.projects.title3}</div> 
                            <div style={{fontWeight: "bold"}} id="link">{props.projects.link3}</div>
                        </div>
                        
                        <div id="description">{props.projects.description3}</div>
                </div> */}
            </div>
        </div>
    </div>
    )
}