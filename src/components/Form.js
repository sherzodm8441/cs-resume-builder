import React from "react";
import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";

export default function Form(){
    const [step, setStep] = useState(1);
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [portfolioLink, setPortfolioLink] = useState("");
    // const [city, setCity] = useState("");
    // const [email, setEmail] = useState("");
    // const [schoolName, setSchoolName] = useState("");
    // const [schoolLocation, setSchoolLocation] = useState("");
    // const [courses, setCourses] = useState("");
    // const [graduation, setGraduation] = useState("");

    //The three STATES and update functions below could have been combined into one. But the way it is now provides better readibility

    const [values, setValues] = useState({ //holds values for pages Education and Personal details 
        firstName: "",
        lastName : "", 
        email : "",
        location : "",
        portfolioLink : "",
        schoolName : "",
        schoolLocation : "",
        courses : "",
        graduation : ""
    })

    const [workExp, setWorkExp] = useState({ //holds values for Work Experience (# of workExp are fixed)
        workPlace1 : "",
        position1 : "",
        startEnd1 : "",
        responsibilities1 : "",
        workPlace2 : "",
        position2 : "",
        startEnd2 : "",
        responsibilities2 : "",
        workPlace3 : "",
        position3 : "",
        startEnd3 : "",
        responsibilities3 : ""
    })

    const [projects, setProjects] = useState({ //holds values for Projects (# of projects are fixed)
        title1 : "",
        link1 : "",
        description1 : "",
        title2 : "",
        link2 : "",
        description2 : "",
        title3 : "",
        link3 : "",
        description3 : ""
    })


    function nextStep(){ //increment step value (go to next page)
        setStep(step + 1);
    }

    function lastStep(){ //decrement step value (go back to previous page)
        setStep(step - 1);
    }

    function updateValues(event){ //updates values for Education and Personal Details
        //console.log(event.target.name, event.target.value)
        setValues({
            ...values, 
            [event.target.name] : event.target.value
        })
    }

    function updateWorkExp(event){ //updates values for work Experience
        setWorkExp({
            ...workExp, 
            [event.target.name] : event.target.value
        })
    }

    function updateProjects(event){ //updates values for Projects
        setProjects({
            ...projects, 
            [event.target.name] : event.target.value
        })
    }



    switch(step){ //switch statement determines which page to go to
        case 1:
            return(
                <PersonalDetails 
                    nextStep = {nextStep}
                    values={values}
                    updateValues = {updateValues}
                />
            );
        case 2:
            return(
                <div>
                    <Education 
                        nextStep = {nextStep}
                        lastStep = {lastStep}
                        values={values}
                        updateValues = {updateValues}
                    />
                </div>
            );
        case 3:
            return(
                <div>
                    <WorkExperience 
                        nextStep = {nextStep}
                        lastStep = {lastStep}
                        workExp = {workExp}
                        updateWorkExp = {updateWorkExp}
                    />
                    
                </div>
            );
        case 4:
            return(
                <div>
                    <Projects 
                        // nextStep = {nextStep}
                        lastStep = {lastStep}
                        projects = {projects}
                        updateProjects = {updateProjects}
                    />
                </div>
            );
    }
    
}