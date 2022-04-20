import React from "react";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';


export default function Projects(props){
    return(
        
        <React.Fragment>
            <h1>Projects</h1>
            <TextField
                required
                id="outlined-required"
                label="Title"

                name="title1"
                value={props.projects.title1}
                onChange={(event) => props.updateProjects(event)}
            />
            
            <TextField
                required
                id="outlined-required"
                label="Link"

                name="link1"
                value={props.projects.link1}
                onChange={(event) => props.updateProjects(event)}
            />
            
            {/* <TextField
                required
                id="outlined-required"
                label="Start - End"

                name="description"
                value={props.workExp.startEnd1}
                onChange={(event) => props.updateWorkExp(event)}
            /> */}
            
            <TextField
                required
                id="outlined-required"
                label="Description"
                multiline

                name="description1"
                value={props.projects.description1}
                onChange={(event) => props.updateProjects(event)}
            />
            <br/>
            <br/>
            <TextField
                required
                id="outlined-required"
                label="Title"

                name="title2"
                value={props.projects.title2}
                onChange={(event) => props.updateProjects(event)}
            />
            
            <TextField
                required
                id="outlined-required"
                label="Link"

                name="link2"
                value={props.projects.link2}
                onChange={(event) => props.updateProjects(event)}
            />
            
            {/* <TextField
                required
                id="outlined-required"
                label="Start - End"

                name="startEnd2"
                value={props.workExp.startEnd2}
                onChange={(event) => props.updateWorkExp(event)}
            /> */}
            
            <TextField
                required
                id="outlined-required"
                label="Description"
                multiline

                name="description2"
                value={props.projects.description2}
                onChange={(event) => props.updateProjects(event)}
            />
            <br/>
            <br/>
            <TextField
                required
                id="outlined-required"
                label="Title"

                name="title3"
                value={props.projects.title3}
                onChange={(event) => props.updateProjects(event)}
            />
            
            <TextField
                required
                id="outlined-required"
                label="Link"

                name="link3"
                value={props.projects.link3}
                onChange={(event) => props.updateProjects(event)}
            />
            
            {/* <TextField
                required
                id="outlined-required"
                label="Start - End"

                name="startEnd3"
                value={props.workExp.startEnd3}
                onChange={(event) => props.updateWorkExp(event)}
            /> */}
            
            <TextField
                required
                id="outlined-required"
                label="Description"
                multiline

                name="description3"
                value={props.projects.description3}
                onChange={(event) => props.updateProjects(event)}
            />
            <br/>
            <br/>
            <Button
                variant="outlined"
                color="secondary"
                startIcon={<ArrowLeftIcon />}
                
                onClick={() => props.lastStep()}
            >Back</Button>
            {/* <Button
                variant="contained"
                endIcon={<ArrowRightIcon />}
                onClick={() => props.nextStep()}
            >Next</Button> */}
        </React.Fragment>

    );
}