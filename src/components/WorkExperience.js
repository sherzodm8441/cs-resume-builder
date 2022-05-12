import React from "react";
import WorkExpCard from "./WorkExpCard";

//Material UI components
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Logo from '../images/logo.png'
import MouseOverPopover from './MouseOverPopover'
import AddIcon from '@mui/icons-material/Add';
import HorizontalLabelPositionBelowStepper from "./HorizontalLabelPositionBelowStepper";



/* Controls the width of the text input boxes */
const txtBox = {
    width: "70%", 
}

const descTxtBox = {
    width: "70%",
}

/* Controls the color of the next button as well as placement on the page */
const nxtBtn = { 
    backgroundColor: "#2db300", 
    float: "right",
    // marginRight: "-350px",
    marginTop: "50px",
    marginBottom: "300px"
}

/* Controls the placement of the back button on the page */
const bckBtn = {
    float: "left",
    marginLeft: "60px",
    marginTop: "50px",
    marginBottom: "300px"
}


export default function WorkExperience(props){

    return(
        
        <React.Fragment>

            

            {/* Project title with logo located in header */}
            <header style={{position:"relative", textAlign: "left", font: "sans-serif", fontSize: "16px", color: "darkblue", padding:"20px"}}>
              <a href="https://sherzodm8441.github.io/cs-resume-builder/">  <img src={Logo} style={{width: "40px", height: "40px", float:"left"}}>
                    </img></a> 
                    Resume <br/>Builder 
            </header>

            <HorizontalLabelPositionBelowStepper 
                pageNum={2}
            />

            <h1 style={
                {textAlign: 'left',
                marginTop: "80px", 
                marginLeft: "90px", 
                marginBottom: "40px",
                }
                }>Work Experience</h1>
            
            
            {/* inputs */}
            {props.workExpsList} 

            <Button style={{marginLeft: "50px", marginBottom: "100px", color: "white", backgroundColor: "#3333ff"}}
                variant="contained"

                onClick={() => props.addWorkExpCard()}
            >{<AddIcon />}ADD</Button>

            <div className="workButtons">
            <Button style = {bckBtn}
                variant="outlined"
                color="secondary"
                startIcon={<ArrowLeftIcon />}

                onClick={() => props.lastStep()}
            >Back</Button>

            <Button  style = {nxtBtn}
                variant="contained"
                endIcon={<ArrowRightIcon />}

                onClick={() => props.nextStep()}
            >Next step</Button>
            </div>

            
        </React.Fragment>

    );
}