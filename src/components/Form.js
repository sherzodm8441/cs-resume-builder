import React from "react";
import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";

export default function Form(props){
    const [step, setStep] = useState(1);

    function nextStep(){ //increment step value (go to next page)
        setStep(step + 1);
    }

    function lastStep(){ //decrement step value (go back to previous page)
        setStep(step - 1);
    }


    switch(step){ //switch statement determines which page to go to
        case 1:
            return(
                <PersonalDetails 
                    nextStep = {nextStep}
                    values={props.values}
                    updateValues = {props.updateValues}
                />
            );
        case 2:
            return(
                <div>
                    <Education 
                        nextStep = {nextStep}
                        lastStep = {lastStep}
                        values={props.values}
                        updateValues = {props.updateValues}
                    />
                </div>
            );
        case 3:
            return(
                <div>
                    <WorkExperience 
                        nextStep = {nextStep}
                        lastStep = {lastStep}
                        workExp = {props.workExp}
                        updateWorkExp = {props.updateWorkExp}
                    />
                    
                </div>
            );
        case 4:
            return(
                <div>
                    <Projects 
                        // nextStep = {nextStep}
                        lastStep = {lastStep}
                        projects = {props.projects}
                        updateProjects = {props.updateProjects}
                    />
                </div>
            );
    }
    
}