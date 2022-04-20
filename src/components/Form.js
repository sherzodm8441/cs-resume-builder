import React from "react";
import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

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

    const [values, setValues] = useState({
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

    const [workExp, SetWorkExp] = useState({
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


    function nextStep(){
        setStep(step + 1);
    }

    function lastStep(){
        setStep(step - 1);
    }

    function updateValues(event){
        console.log(event.target.name, event.target.value)
        setValues({
            ...values, 
            [event.target.name] : event.target.value
        })
    }

    function updateWorkExp(event){
        SetWorkExp({
            ...workExp, 
            [event.target.name] : event.target.value
        })
    }



    switch(step){
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
        
                </div>
            );
    }
    
}