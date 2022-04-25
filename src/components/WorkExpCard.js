import React from "react"

//Material UI components
import TextField from '@mui/material/TextField';
import MouseOverPopover from './MouseOverPopover'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';

/* Controls the width of the text input boxes */
const txtBox = {
    width: "70%", 
}

const descTxtBox = {
    width: "70%",
}

export default function workExpCard(props){
    return(
        <div>

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

            name="workPlace" //JSX specification (rest of the components follow the same pattern)
            value={props.workPlace} //JSX
            onChange={(event) => props.updateWorkExpsList(event, props.i)} //JSX
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

            name="position"
            value={props.position}
            onChange={(event) => props.updateWorkExpsList(event, props.i)}
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

            name="startEnd"
            value={props.startEnd}
            onChange={(event) => props.updateWorkExpsList(event, props.i)}
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

            name="responsibilities"
            value={props.responsibilities}
            onChange={(event) => props.updateWorkExpsList(event, props.i)}
        />
        <MouseOverPopover style={{width: "20px", float: 'right', marginRight: "110px", marginLeft: "-110px"}} text={props.tip}/>
        <br/>
        <br/>
        <Button  
            variant="contained"
            // endIcon={<DeleteForeverIcon />}

            onClick={() => props.deleteWorkExpCard(props.i)}
            >{<DeleteForeverIcon />}</Button>
        </div>
    )
}