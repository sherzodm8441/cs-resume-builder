import React from "react";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';


export default function Education(props){
    return(
        
        <React.Fragment>
            <h1>Education</h1>
            <TextField
                required
                id="outlined-required"
                label="School Name"

                name="schoolName"
                value={props.values.schoolName}
                onChange={(event) => props.updateValues(event)}
            />
            <br/>
            <br/>
            <TextField
                required
                id="outlined-required"
                label="Graduation date"

                name="graduation"
                value={props.values.graduation}
                onChange={(event) => props.updateValues(event)}
            />
            <br/>
            <br/>
            <TextField
                required
                id="outlined-required"
                label="School Location"

                name="schoolLocation"
                value={props.values.schoolLocation}
                onChange={(event) => props.updateValues(event)}
            />
            <br/>
            <br/>
            <TextField
                required
                id="outlined-required"
                label="Degree"

                name="degree"
                value={props.values.degree}
                onChange={(event) => props.updateValues(event)}
            />
            <br/>
            <br/>
            <TextField
                required
                id="outlined-required"
                label="Major"

                name="major"
                value={props.values.major}
                onChange={(event) => props.updateValues(event)}
            />
            <br/>
            <br/>
            <TextField
                required
                id="outlined-required"
                label="Courses"

                name="courses"
                value={props.values.courses}
                onChange={(event) => props.updateValues(event)}
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