import React from "react";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Logo from '/Users/bryantbardales/Desktop/GitHub/cs-resume-builder/src/images/logo.png'

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
            <h1 style={
                {textAlign: 'left',
                marginTop: "50px", 
                marginLeft: "125px", 
                marginBottom: "50px",
                }
                }>Education</h1>
            
            
            {/* School name text field */}

            <h3 style={
                {textAlign: 'left', 
                marginLeft: "125px", 
                marginBottom: "5px",
            }
            
            }>School Name</h3>
            <TextField style = {txtBox} 
                required
                id="outlined-required"
                placeholder="Please enter school name"

                name="schoolName"
                value={props.values.schoolName}
                onChange={(event) => props.updateValues(event)}
            />
            <br/>
            <br/>

            <h3 style={
                {textAlign: 'left', 
                marginLeft: "125px", 
                marginBottom: "5px",
            }
            
            }>Graduation Date</h3>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                placeholder="Please enter graduation date"

                name="graduation"
                value={props.values.graduation}
                onChange={(event) => props.updateValues(event)}
            />
            <br/>
            <br/>

            <h3 style={
                {textAlign: 'left', 
                marginLeft: "125px", 
                marginBottom: "5px",
            }
            
            }>School Location</h3>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                placeholder="Please enter the school location"

                name="schoolLocation"
                value={props.values.schoolLocation}
                onChange={(event) => props.updateValues(event)}
            />
            <br/>
            <br/>

            <h3 style={
                {textAlign: 'left', 
                marginLeft: "125px", 
                marginBottom: "5px",
            }
            
            }>Degree</h3>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                placeholder="Please enter the degree earned"

                name="degree"
                value={props.values.degree}
                onChange={(event) => props.updateValues(event)}
            />
            <br/>
            <br/>

            <h3 style={
                {textAlign: 'left', 
                marginLeft: "125px", 
                marginBottom: "5px",
            }
            
            }>Major</h3>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                placeholder="Please enter your major"

                name="major"
                value={props.values.major}
                onChange={(event) => props.updateValues(event)}
            />
            <br/>
            <br/>

            <h3 style={
                {textAlign: 'left', 
                marginLeft: "125px", 
                marginBottom: "5px",
            }
            
            }>Relevant Courses</h3>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                placeholder="Please enter courses attended"

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