import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';


export default function WorkExperience(props){
    return(
        
        <React.Fragment>
            <h1>Work Experience</h1>
            <TextField
                required
                id="outlined-required"
                label="Work Place"

                name="workPlace1"
                value={props.workExp.workPlace1}
                onChange={(event) => props.updateWorkExp(event)}
            />
            
            <TextField
                required
                id="outlined-required"
                label="Position"

                name="position1"
                value={props.workExp.position1}
                onChange={(event) => props.updateWorkExp(event)}
            />
            
            <TextField
                required
                id="outlined-required"
                label="Start - End"

                name="startEnd1"
                value={props.workExp.startEnd1}
                onChange={(event) => props.updateWorkExp(event)}
            />
            
            <TextField
                required
                id="outlined-required"
                label="Responsibilies"
                multiline

                name="responsibilities1"
                value={props.workExp.responsibilities1}
                onChange={(event) => props.updateWorkExp(event)}
            />
            <br/>
            <br/>
            <TextField
                required
                id="outlined-required"
                label="Work Place"

                name="workPlace2"
                value={props.workExp.workPlace2}
                onChange={(event) => props.updateWorkExp(event)}
            />
            
            <TextField
                required
                id="outlined-required"
                label="Position"

                name="position2"
                value={props.workExp.position2}
                onChange={(event) => props.updateWorkExp(event)}
            />
            
            <TextField
                required
                id="outlined-required"
                label="Start - End"

                name="startEnd2"
                value={props.workExp.startEnd2}
                onChange={(event) => props.updateWorkExp(event)}
            />
            
            <TextField
                required
                id="outlined-required"
                label="Responsibilies"
                multiline

                name="responsibilities2"
                value={props.workExp.responsibilities2}
                onChange={(event) => props.updateWorkExp(event)}
            />
            <br/>
            <br/>
            <TextField
                required
                id="outlined-required"
                label="Work Place"

                name="workPlace3"
                value={props.workExp.workPlace3}
                onChange={(event) => props.updateWorkExp(event)}
            />
            
            <TextField
                required
                id="outlined-required"
                label="Position"

                name="position3"
                value={props.workExp.position3}
                onChange={(event) => props.updateWorkExp(event)}
            />
            
            <TextField
                required
                id="outlined-required"
                label="Start - End"

                name="startEnd3"
                value={props.workExp.startEnd3}
                onChange={(event) => props.updateWorkExp(event)}
            />
            
            <TextField
                required
                id="outlined-required"
                label="Responsibilies"
                multiline

                name="responsibilities3"
                value={props.workExp.responsibilities3}
                onChange={(event) => props.updateWorkExp(event)}
            />
            <br/>
            <br/>
            <Button
                variant="outlined"
                color="secondary"
                startIcon={<ArrowLeftIcon />}
                onClick={() => props.lastStep()}
            >Back</Button>
            <Button
                variant="contained"
                endIcon={<ArrowRightIcon />}
                onClick={() => props.nextStep()}
            >Next</Button>
        </React.Fragment>

    );
}