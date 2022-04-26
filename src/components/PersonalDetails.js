import React from "react";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Logo from '../images/logo.png'
import MouseOverPopover from "./MouseOverPopover";
import { red } from "@mui/material/colors";

/* Controls the width of the text input boxes */
const nameTxtBox = {
    width: "36%",
    height: "40px",
    marginRight: "4px",
}
const txtBox = {
    width: "73%", 
    height: "40px",

}

const locTxtBox = {
    width: "73%", 
    height: "40px",
    marginLeft: "20px",
}

/* Controls the color of the next button as well as placement on the page */
const nxtBtn = {
    backgroundColor: "#2db300", 
    float: "right",
    marginRight: "100px",
    marginTop: "50px",
    marginBottom: "300px"
}


export default function PersonalDetails(props){
    return(
        
        <React.Fragment>
            
            {/* Project title with logo located in header */}
            <header style={{position:"relative", textAlign: "left", font: "sans-serif", fontSize: "16px", color: "darkblue", padding:"20px"}}>
              <a href="https://sherzodm8441.github.io/cs-resume-builder/">  <img src={Logo} style={{width: "40px", height: "40px", float:"left"}}>
                    </img></a> 
                    Resume <br/>Builder 
            </header>

            

            {/* "Personal Details" title at the top of page with CSS */}
            <h1  
            style={
                {textAlign: 'left',
                marginTop: "80px", 
                marginLeft: "90px", 
                marginBottom: "40px",
                }
                }> Contact Information
            </h1>

            
            {/* "Full Name" title at the top of the first name and last name text box with CSS and function */}
            <h4
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }>Full Name <span>*</span>
            </h4>

            <TextField style = {{width: "36%", height: "40px", marginLeft: "-20px"}}

                id="outlined-required"
                label="First name"

                name="firstName"
                value={props.values.firstName}
                onChange={(event) => props.updateValues(event)}
                required={true}
            />
            
            <TextField style = {{width: "36%", height: "40px", marginLeft: "5px"}}
                
                id="outlined-required"
                label="Last name"

                name="lastName"
                value={props.values.lastName}
                onChange={(event) => props.updateValues(event)}
                required={true}
            />
            <br/>
            <br/>


            {/* "Email" title at the top of the email text box with CSS and function */}
            <h4 style={
                {textAlign: 'left',
                 marginLeft: "90px", 
                 marginBottom: "5px",
                 
                 }
            }>Email <span>*</span></h4>
            <TextField style = {txtBox}
                
                id="outlined-required"
                label="Enter your email address"

                name="email"
                value={props.values.email}
                onChange={(event) => props.updateValues(event)}
                required={true}
            />
             <MouseOverPopover style={{width: "20px", float: 'right', marginRight: "88px", marginLeft: "-88px"}} text={'ex. email@gmail.com'}/>
            <br/>
            <br/>


            {/* "Phone Number" title at the top of the phone number text box with CSS and function */}
            <h4 style={
                {textAlign: 'left',
                 marginLeft: "90px", 
                 marginBottom: "5px",
                 
                 }
            }>Phone Number <span>*</span></h4>
            <TextField style = {txtBox}
                
                id="outlined-required"
                label="Please enter your phone number"

                name="phone"
                value={props.values.phone}
                onChange={(event) => props.updateValues(event)}
                required={true}
            />
             <MouseOverPopover style={{width: "20px", float: 'right', marginRight: "88px", marginLeft: "-88px"}} text={'ex. (333)333-3333'}/>
            <br/>
            <br/>


            {/* "Location" title at the top of the location text box with CSS and function */}
            <h4 style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
            }
            
            }>Location <span>*</span></h4>
            <TextField style = {txtBox}
            
                id="outlined-required"
                label="Please enter your location"

                name="location"
                value={props.values.location}
                onChange={(event) => props.updateValues(event)}
                required={true}
            />
            <MouseOverPopover style={{width: "20px", float: 'right', marginRight: "88px", marginLeft: "-88px"}} text={'ex. Brooklyn, NY'}/>
            <br/>
            <br/>


            {/* "Portfolio Link" title at the top of the portfolio text box with CSS and function */}
            <h4 style={
                {textAlign: 'left',
                 marginLeft: "90px",
                 marginBottom: "5px"
                }
            }>Portfolio Link <span>(Optional)</span></h4>

            <TextField style = {{width: "73%", height: "40px", marginLeft: "-20px"}}
               
                id="outlined-required"
                label="Please enter a link to your portfolio"

                name="portfolioLink"
                value={props.values.portfolioLink}
                onChange={(event) => props.updateValues(event)}
                required={true}
            />
            <br/>
            <br/>

            {props.values.firstName && props.values.lastName && props.values.email && props.values.location?<Button style = {nxtBtn}
                variant="contained"
                endIcon={<ArrowRightIcon />}
                
                onClick={() => props.nextStep()}
            >Next step</Button>
            :
            <Button style = {nxtBtn}
                variant="contained"
                endIcon={<ArrowRightIcon />}
                disabled
                
                onClick={() => props.nextStep()}
            >Next step</Button>}
        </React.Fragment>

    );
}