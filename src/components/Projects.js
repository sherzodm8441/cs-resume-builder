import React from "react";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Logo from '../images/logo.png'
import MouseOverPopover from './MouseOverPopover'
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from '@mui/icons-material/Add';
import HorizontalLabelPositionBelowStepper from "./HorizontalLabelPositionBelowStepper";


import ProjectCard from "./ProjectCard";


/* Controls the width of the text input boxes */
const txtBox = {
    width: "70%", 
}

/* Controls the placement of the back button on the page */
const bckBtn = {
    float: "left",
    marginLeft: "100px",
    marginTop: "50px",
    marginBottom: "300px"
}

/* Controls the placement of the download button on the page */
const downloadBtn = {
    backgroundColor: "#ff531a", 
    float: "right",
    // marginRight: "-350px",
    marginTop: "50px",
    marginBottom: "300px"
}


export default function Projects(props){
    return(
        
        <React.Fragment>

            {/* Project title with logo located in header */}
            <header style={{position:"relative", textAlign: "left", font: "sans-serif", fontSize: "16px", color: "darkblue", padding:"20px"}}>
              <a href="https://sherzodm8441.github.io/cs-resume-builder/">  <img src={Logo} style={{width: "40px", height: "40px", float:"left"}}>
                    </img></a> 
                    Resume <br/>Builder 
            </header>

            <HorizontalLabelPositionBelowStepper
                pageNum={3}
            />

            <h1 style={
                {textAlign: 'left',
                marginTop: "100px", 
                marginLeft: "90px", 
                marginBottom: "50px",
                }
                }>Projects</h1>


            {/* inputs */}
            {props.projectsList}
            
            <Button style={{marginLeft: "50px", marginBottom: "100px", color: "white", backgroundColor: "#3333ff"}}
                variant="contained"

                onClick={() => props.addProjectCard()}
            >{<AddIcon />}ADD</Button>


            <div>
                <Button style = {bckBtn}
                    variant="outlined"
                    color="secondary"
                    startIcon={<ArrowLeftIcon />}
                    
                    onClick={() => props.lastStep()}
                >Back</Button>

                
                <Button style = {downloadBtn}
                    variant="contained"
                    endIcon={<DownloadIcon />}
                    onClick={() => props.handleDownload()}
                >Download</Button>
            </div>

            
        </React.Fragment>

    );
}