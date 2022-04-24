import React from "react";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Logo from '../images/logo.png'
import MouseOverPopover from './MouseOverPopover'
import DownloadIcon from '@mui/icons-material/Download';


/* Controls the width of the text input boxes */
const txtBox = {
    width: "70%", 
}

/* Controls the placement of the back button on the page */
const bckBtn = {
    float: "left",
    marginLeft: "100px",
    marginTop: "100px"
}

/* Controls the placement of the download button on the page */
const downloadBtn = {
    float: "right",
    marginRight: "100px",
    marginTop: "100px"
}


export default function Projects(props){
    //this array contains the text inside the mouse popover. 
    const projectsTip = [<b>Points to consider:</b>, 
    <br/>,  
    'Be intentional about the projects you highlight',
    <br/>,
    'Projects should ', <b>ALWAYS</b>, ' demonstrate your strengths,', 
    <br/>, 
    'interests, and/or an ability to provide solutions to problems',
    <br/>,
    'What should your project description contain?',
    <br/>,
    <ul>
        <li>Links - source code and live site/app</li>
        <li>What problem does it solve?</li>
        <li>Which technologies did you use?</li>
        <li>What are some of the features?<br/>Describe the specific contributions you made.</li>
    </ul>]
    return(
        
        <React.Fragment>

            {/* Project title with logo located in header */}
            <header style={{textAlign: "left", font: "sans-serif", fontSize: "30px", color: "darkblue"}}>
              <a href="">  <img src={Logo} style={{width: "24px", height: "24px",}}>
                    </img></a>
                    Resume Builder
            </header>

            <h1 style={
                {textAlign: 'left',
                marginTop: "100px", 
                marginLeft: "90px", 
                marginBottom: "50px",
                }
                }>Projects</h1>

            <h3 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }>Title
            </h3>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Title"

                name="title1"
                value={props.projects.title1}
                onChange={(event) => props.updateProjects(event)}
            />
            
            <h3 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }>Link
            </h3>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Link"

                name="link1"
                value={props.projects.link1}
                onChange={(event) => props.updateProjects(event)}
            />
            
            <h3 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }>Description
            </h3>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Description"
                multiline

                name="description1"
                value={props.projects.description1}
                onChange={(event) => props.updateProjects(event)}
            />
            <MouseOverPopover style={{width: "20px", float: 'right'}} text={projectsTip}/>
            <br/>
            <br/>


            <h3 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                marginTop: "50px"
                }
                }>Title
            </h3>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Title"

                name="title2"
                value={props.projects.title2}
                onChange={(event) => props.updateProjects(event)}
            />
            
            <h3 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }>Link
            </h3>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Link"

                name="link2"
                value={props.projects.link2}
                onChange={(event) => props.updateProjects(event)}
            />

            <h3 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }>Description
            </h3>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Description"
                multiline

                name="description2"
                value={props.projects.description2}
                onChange={(event) => props.updateProjects(event)}
            />
            <br/>
            <br/>

            <h3 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                marginTop: "50px",
                }
                }>Title
            </h3>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Title"

                name="title3"
                value={props.projects.title3}
                onChange={(event) => props.updateProjects(event)}
            />
            
            <h3 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }>Link
            </h3>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Link"

                name="link3"
                value={props.projects.link3}
                onChange={(event) => props.updateProjects(event)}
            />
            
            

            <h3 
            style={
                {textAlign: 'left', 
                marginLeft: "90px", 
                marginBottom: "5px",
                }
                }>Description
            </h3>
            <TextField style = {txtBox}
                required
                id="outlined-required"
                label="Description"
                multiline

                name="description3"
                value={props.projects.description3}
                onChange={(event) => props.updateProjects(event)}
            />
            <br/>
            <br/>
            <Button style = {bckBtn}
                variant="outlined"
                color="secondary"
                startIcon={<ArrowLeftIcon />}
                
                onClick={() => props.lastStep()}
            >Back</Button>
            <Button style = {downloadBtn}
                variant="contained"
                endIcon={<DownloadIcon />}
                onClick={() => props.handleDownload()}
            >Download</Button>
        </React.Fragment>

    );
}