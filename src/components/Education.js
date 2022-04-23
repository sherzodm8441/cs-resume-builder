import React from "react";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Logo from '../images/logo.png'
import MouseOverPopover from './MouseOverPopover'

const txtBox = {
    width: "70%", /* Controls the width of the text input boxes */
}

const nxtBtn = { /* Controls the color of the next button as well as placement on the page */
    backgroundColor: "#2db300", 
    float: "right",
    marginRight: "100px",
    marginTop: "100px"
}

/* Controls the placement of the back button on the page */
const bckBtn = { 
    float: "left",
    marginLeft: "100px",
    marginTop: "100px"
}


export default function Education(props){
    return(
        
        <React.Fragment>
            
            {/* Project title with logo located in header */}
            <header style={{textAlign: "left", font: "sans-serif", fontSize: "30px", color: "darkblue"}}>
              <a href="">  <img src={Logo} style={{width: "24px", height: "24px",}}>
                    </img></a> 
                    Resume Builder 
            </header>

            {/* Education title at the top of page */}
            <h1>Education</h1>
            
            {/* School nem text field */}
            <TextField style = {txtBox} 
                required
                id="outlined-required"
                label="School Name"

                name="schoolName"
                value={props.values.schoolName}
                onChange={(event) => props.updateValues(event)}
            />
            <br/>
            <br/>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Graduation date"

                name="graduation"
                value={props.values.graduation}
                onChange={(event) => props.updateValues(event)}
            />
            <br/>
            <br/>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="School Location"

                name="schoolLocation"
                value={props.values.schoolLocation}
                onChange={(event) => props.updateValues(event)}
            />
            <br/>
            <br/>
            {/* <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Degree"

                name="degree"
                value={props.values.degree}
                onChange={(event) => props.updateValues(event)}
            /> */}
            <div>
                <form>
                    <select name="degree" value={props.values.degree} className="dropdown" onChange={(event) => props.updateValues(event)}>
                        <option value="">Select degree</option>
                        <option value="Bachelor's">Bachelor's</option>
                        <option value="Associate">Associate</option>
                        <option value="Master's">Master's</option>
                        <option value="High School Diploma">High School</option>
                    </select>
                </form>
            </div>
            <MouseOverPopover style={{width: "20px", float: 'right'}} text={"Choose 'Select Degree' if N/A"}/>
            <br/>
            <br/>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Major"

                name="major"
                value={props.values.major}
                onChange={(event) => props.updateValues(event)}
            />
            <br/>
            <br/>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Courses"

                name="courses"
                value={props.values.courses}
                onChange={(event) => props.updateValues(event)}
            />
            <br/>
            <br/>
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
            >Next</Button>

            
        </React.Fragment>

    );
}