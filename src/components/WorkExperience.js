import React from "react";

//Material UI components
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Logo from '../images/logo.png'

/* Controls the width of the text input boxes */
const txtBox = {
    width: "70%", 
}

/* Controls the color of the next button as well as placement on the page */
const nxtBtn = { 
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


export default function WorkExperience(props){
    return(
        
        <React.Fragment>

            <header style={{textAlign: "left", font: "sans-serif", fontSize: "30px", color: "darkblue"}}>
              <a href="">  <img src={Logo} style={{width: "24px", height: "24px",}}>
                    </img></a>
                    Resume Builder
            </header>

            <h1>Work Experience</h1>
            <TextField style = {txtBox}
                required //material UI provided specifications
                id="outlined-required" //mui
                label="Work Place" //mui

                name="workPlace1" //JSX specification (rest of the components follow the same pattern)
                value={props.workExp.workPlace1} //JSX
                onChange={(event) => props.updateWorkExp(event)} //JSX
            />
            
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Position"

                name="position1"
                value={props.workExp.position1}
                onChange={(event) => props.updateWorkExp(event)}
            />
            
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Start - End"

                name="startEnd1"
                value={props.workExp.startEnd1}
                onChange={(event) => props.updateWorkExp(event)}
            />
            
            <TextField style = {txtBox}
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
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Work Place"

                name="workPlace2"
                value={props.workExp.workPlace2}
                onChange={(event) => props.updateWorkExp(event)}
            />
            
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Position"

                name="position2"
                value={props.workExp.position2}
                onChange={(event) => props.updateWorkExp(event)}
            />
            
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Start - End"

                name="startEnd2"
                value={props.workExp.startEnd2}
                onChange={(event) => props.updateWorkExp(event)}
            />
            
            <TextField style = {txtBox}
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
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Work Place"

                name="workPlace3"
                value={props.workExp.workPlace3}
                onChange={(event) => props.updateWorkExp(event)}
            />
            
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Position"

                name="position3"
                value={props.workExp.position3}
                onChange={(event) => props.updateWorkExp(event)}
            />
            
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Start - End"

                name="startEnd3"
                value={props.workExp.startEnd3}
                onChange={(event) => props.updateWorkExp(event)}
            />
            
            <TextField style = {txtBox}
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