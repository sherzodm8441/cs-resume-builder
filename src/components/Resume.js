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
                
            </div>
        </div>
    </div>
    )
}