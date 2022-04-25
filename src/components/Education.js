import React from "react";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Logo from '../images/logo.png'
import MouseOverPopover from './MouseOverPopover'

const txtBox = {
    width: "73%", /* Controls the width of the text input boxes */
    height: "40px",
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
            <header style={{position:"relative", textAlign: "left", font: "sans-serif", fontSize: "16px", color: "darkblue", padding:"20px"}}>
              <a href="">  <img src={Logo} style={{width: "40px", height: "40px", float:"left"}}>
                    </img></a> 
                    Resume <br/>Builder 
            </header>


            {/* Education title at the top of page */}
            <h1 style={
                {textAlign: 'left',
                marginTop: "80px", 
                marginLeft: "90px", 
                marginBottom: "40px",
                }
                }>Education</h1>
            
            {/* School name text field */}
            <h4
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }> University/Program Name <span>*</span>
            </h4>
            <TextField style = {txtBox} 
                required
                id="outlined-required"
                placeholder="Please enter your school name"

                name="schoolName"
                value={props.values.schoolName}
                onChange={(event) => props.updateValues(event)}
            />
            <br/>
            <br/>

            <h4 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }>Graduation Date <span>*</span>
            </h4>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                placeholder="Please enter your graduation date"

                name="graduation"
                value={props.values.graduation}
                onChange={(event) => props.updateValues(event)}
            />
            <br/>
            <br/>

            <h4
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }> School Location 
            </h4>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                placeholder="Please enter your school location"

                name="schoolLocation"
                value={props.values.schoolLocation}
                onChange={(event) => props.updateValues(event)}
            />
            <br/>
            <br/>
            <div>
                <form style = {{width: "73%", marginLeft:"83px"}}>
                    <select name="degree" value={props.values.degree} className="dropdown" onChange={(event) => props.updateValues(event)}>
                        <option value="">Select degree</option>
                        <option value="Associate's">Associate's</option>
                        <option value="Bachelor's">Bachelor's</option>
                        <option value="Master's">Master's</option>
                        <option value="Certificate / Diploma">Certificate / Diploma</option>
                    </select>
                </form>
            </div>
            <MouseOverPopover style={{width: "50px", float: 'right'}} text={"Choose 'Select Degree' if N/A"}/>
            <br/>
            <br/>

            <h4 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }>Major/Field of Study <span>*</span>
            </h4>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                placeholder="Please enter your school major"

                name="major"
                value={props.values.major}
                onChange={(event) => props.updateValues(event)}
            />
            <br/>
            <br/>

            <h4 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }>Relevant Courses <span>*</span>
            </h4>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                placeholder="Please enter relevant courses you have taken"

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
            >Next step</Button>

            
        </React.Fragment>

    );
}