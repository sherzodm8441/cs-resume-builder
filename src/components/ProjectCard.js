import React from "react"

import TextField from '@mui/material/TextField';
import MouseOverPopover from './MouseOverPopover'
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


/* Controls the width of the text input boxes */
const txtBox = {
    width: "70%", 
}

export default function ProjectCard(props){
    return(
        <div>
            <h4 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }>Title
            </h4>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Please add the project title/name"

                name="title"
                value={props.title}
                onChange={(event) => props.updateProjects(event, props.i)}
            />
            
            <h4 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }>Link
            </h4>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Please add a link to the project"

                name="link"
                value={props.link}
                onChange={(event) => props.updateProjects(event, props.i)}
            />
            
            <h4 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }>Description
            </h4>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Please add a project description"
                multiline

                name="description"
                value={props.description}
                onChange={(event) => props.updateProjects(event, props.i)}
            />
            <MouseOverPopover style={{width: "20px", float: 'right', marginRight: "110px", marginLeft: "-110px"}} text={props.tip}/>
            <br/>
            <br/>
            <Button  
            variant="contained"
            // endIcon={<DeleteForeverIcon />}

            onClick={() => props.deleteProjectCard(props.i)}
            >{<DeleteForeverIcon />}</Button>
        </div>
    )
}