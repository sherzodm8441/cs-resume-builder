import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


export default function PersonalDetails(props){
    return(
        
        <React.Fragment>
            <h1>Personal Details</h1>
            
            <TextField
                required
                id="outlined-required"
                label="First Name"

                name="firstName"
                value={props.values.firstName}
                onChange={(event) => props.updateValues(event)}
            />
            <TextField
                required
                id="outlined-required"
                label="Last Name"

                name="lastName"
                value={props.values.lastName}
                onChange={(event) => props.updateValues(event)}
            />
            <br/>
            <br/>
            <TextField
                required
                id="outlined-required"
                label="Email"

                name="email"
                value={props.values.email}
                onChange={(event) => props.updateValues(event)}
            />
            <br/>
            <br/>
            <TextField
                required
                id="outlined-required"
                label="Location"

                name="location"
                value={props.values.location}
                onChange={(event) => props.updateValues(event)}
            />
            <br/>
            <br/>
            <TextField
                required
                id="outlined-required"
                label="Portfolio Link"

                name="portfolioLink"
                value={props.values.portfolioLink}
                onChange={(event) => props.updateValues(event)}
            />
            <br/>
            <br/>
            <Button
                variant="contained"
                endIcon={<ArrowRightIcon />}
                onClick={() => props.nextStep()}
            >Next</Button>
        </React.Fragment>

    );
}