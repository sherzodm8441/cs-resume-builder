import React from "react";

//Material UI components
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Logo from '../images/logo.png'
import MouseOverPopover from './MouseOverPopover'

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
    marginRight: "100px",
    marginTop: "50px",
    marginBottom: "100px"
}

/* Controls the placement of the back button on the page */
const bckBtn = {
    float: "left",
    marginLeft: "100px",
    marginTop: "50px",
    marginBottom: "100px"
}


export default function WorkExperience(props){
    //this array contains the text inside the mouse popover. 
    const responsibilitiesTip = [<b>Points to consider:</b>, 
    <br/>,  
    'Growth: What did you add to the company?',
    <br/>,
    'Frequency : How often did you complete tasks?',
    <br/>,
    'Impact: How many people did your work help?',
    <br/>,
    'Reduction: How did you create efficiency by helping reduce or save XX?']

    return(
        
        <React.Fragment>

            {/* Project title with logo located in header */}
            <header style={{position:"relative", textAlign: "left", font: "sans-serif", fontSize: "16px", color: "darkblue", padding:"20px"}}>
              <a href="">  <img src={Logo} style={{width: "40px", height: "40px", float:"left"}}>
                    </img></a> 
                    Resume <br/>Builder 
            </header>

            <h1 style={
                {textAlign: 'left',
                marginTop: "80px", 
                marginLeft: "90px", 
                marginBottom: "40px",
                }
                }>Work Experience</h1>

            <h4 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }>Company Name <span>*</span>
            </h4>   
            <TextField style = {txtBox}
                required //material UI provided specifications
                id="outlined-required" //mui
                label="Please enter the name of the company you worked for" //mui

                name="workPlace1" //JSX specification (rest of the components follow the same pattern)
                value={props.workExp.workPlace1} //JSX
                onChange={(event) => props.updateWorkExp(event)} //JSX
            />
            
            <h4 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }>Job Title <span>*</span>
            </h4>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Please enter the name of the job title"

                name="position1"
                value={props.workExp.position1}
                onChange={(event) => props.updateWorkExp(event)}
            />
            
            <h4 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }>Start Date - End Date <span>*</span>
            </h4>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Please enter the start and end date of the job if applicable"

                name="startEnd1"
                value={props.workExp.startEnd1}
                onChange={(event) => props.updateWorkExp(event)}
            />
            <MouseOverPopover style={{width: "20px", float: 'right', marginRight: "110px", marginLeft: "-110px"}} text={"ex. MM/YYYY - MM/YYYY or Present"}/>
            
            <h4 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }>Responsibilities <span>*</span>
            </h4>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Please enter a description of your job responsibilities"
                multiline

                name="responsibilities1"
                value={props.workExp.responsibilities1}
                onChange={(event) => props.updateWorkExp(event)}
            />
            <MouseOverPopover style={{width: "20px", float: 'right', marginRight: "110px", marginLeft: "-110px"}} text={responsibilitiesTip}/>
            <br/>
            <br/>


            <h4 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                marginTop: "50px"
                }
                }>Company Name <span>*</span>
            </h4>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Please enter the name of the work place"

                name="workPlace2"
                value={props.workExp.workPlace2}
                onChange={(event) => props.updateWorkExp(event)}
            />
            
            <h4 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }>Job Title <span>*</span>
            </h4>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Please enter the name of the work position"

                name="position2"
                value={props.workExp.position2}
                onChange={(event) => props.updateWorkExp(event)}
            />
            
            <h4 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }>Start Date - End Date <span>*</span>
            </h4>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Please enter the start and end of the job if applicable"

                name="startEnd2"
                value={props.workExp.startEnd2}
                onChange={(event) => props.updateWorkExp(event)}
            />
            
            <h4 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }>Responsibilities <span>*</span>
            </h4>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Please enter a description of your job responsibilities"
                multiline

                name="responsibilities2"
                value={props.workExp.responsibilities2}
                onChange={(event) => props.updateWorkExp(event)}
            />
            <br/>
            <br/>


            <h4 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                marginTop: "50px"
                }
                }>Company Name <span>*</span>
            </h4>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Please enter the name of the work place"

                name="workPlace3"
                value={props.workExp.workPlace3}
                onChange={(event) => props.updateWorkExp(event)}
            />
            
            <h4 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }>Job Title <span>*</span>
            </h4>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Please enter the name of the work position"

                name="position3"
                value={props.workExp.position3}
                onChange={(event) => props.updateWorkExp(event)}
            />
            
            <h4 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }>Start Date - End Date <span>*</span>
            </h4>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Please enter the start and end of the job if applicable"

                name="startEnd3"
                value={props.workExp.startEnd3}
                onChange={(event) => props.updateWorkExp(event)}
            />
            
            <h4 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }>Responsibilities <span>*</span>
            </h4>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Please enter a description of your job responsibilities"
                multiline

                name="responsibilities3"
                value={props.workExp.responsibilities3}
                onChange={(event) => props.updateWorkExp(event)}
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