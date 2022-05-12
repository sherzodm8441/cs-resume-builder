import React, { useState, useRef } from "react"
import Form from "./components/Form"
import Resume from "./components/Resume";
import './index.css';
import { useReactToPrint } from "react-to-print";
import WorkExpCard from "./components/WorkExpCard";
import WorkExpResume from "./components/WorkExpResume";
import ProjectCard from "./components/ProjectCard"
import ProjectResume from "./components/ProjectResume";
import { Button } from "@mui/material";


function App() {

  //The three STATES and update functions below could have been combined into one. But the way it is now provides better readibility

  const [values, setValues] = useState(JSON.parse(localStorage.getItem('values')) || { //holds values for pages Education and Personal details 
    firstName: "",
    lastName : "", 
    email : "",
    location : "",
    portfolioLink : "",
    schoolName : "",
    schoolLocation : "",
    courses : "",
    graduation : "",
    degree : "",
    major : "",
    phone : ""
})

React.useEffect(() => { // store values in localStorage
  localStorage.setItem('values', JSON.stringify(values))
}, [values])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

const [workExps, setWorkExps] = useState(JSON.parse(localStorage.getItem('workExps')) || [
  {
  workPlace: "",
  position: "",
  startEnd: "",
  responsibilities: ""
  }
])


React.useEffect(() => { // store workExp in localStorage
  localStorage.setItem('workExps', JSON.stringify(workExps))
}, [workExps])

function addWorkExpCard(){
  setWorkExps([...workExps,
    {
      workPlace: "",
      position: "",
      startEnd: "",
      responsibilities: ""
    }
  ])
}

function deleteWorkExpCard(index){
  console.log("running")
  const list = [...workExps]

  list.splice(index, 1)
  setWorkExps(list)
}

function updateWorkExpsList(event, index){
  // console.log(event.target.name, event.target.value)
  const list = [...workExps]
  list[index][event.target.name] = event.target.value
  setWorkExps(list)
}

let workExpsList = workExps.map((item, i) => <WorkExpCard 
  key={i}
  i={i}
  workPlace={item.workPlace}
  position={item.position}
  startEnd={item.startEnd}
  responsibilities={item.responsibilities}
  tip={responsibilitiesTip}
  updateWorkExpsList={updateWorkExpsList}
  deleteWorkExpCard={deleteWorkExpCard}
/>)

const [workExpResume, setWorkExpResume] = useState()

const updateWorkExpResume = React.useCallback((workExps) => { // figures out the number of updated tasks
  let list = []
  for(let i = 0; i < workExps.length; i++){
    list[i] = <WorkExpResume 
      workPlace={workExps[i].workPlace}
      position={workExps[i].position}
      startEnd={workExps[i].startEnd}
      responsibilities={workExps[i].responsibilities}
    />
  }
  return list
}, [workExps])

React.useEffect(() => { // updates the number of completed tasks
  setWorkExpResume(updateWorkExpResume(workExps))
}, [updateWorkExpResume, workExps])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

const [projects, setProjects] = useState(JSON.parse(localStorage.getItem('projects')) || [
  {
    title: "",
    link: "",
    description: ""
  }
])

function updateProjects(event, index){
  const list = [...projects]
  list[index][event.target.name] = event.target.value
  setProjects(list)
}

let projectsList = projects.map((item, i) => <ProjectCard 
  key={i}
  i={i}
  title={item.title}
  link={item.link}
  description={item.description}
  tip={projectsTip}
  updateProjects={updateProjects}
  deleteProjectCard={deleteProjectCard}
/>)

function addProjectCard(){
  setProjects([...projects,
  {
    title: "",
    link: "",
    description: ""
  }
  ])
}

function deleteProjectCard(index){
  const list = [...projects]

  list.splice(index, 1)
  setProjects(list)
}

const [projectResume, setProjectResume] = useState()

const updateProjectResume = React.useCallback((projects) => { // figures out the number of updated tasks
  let list = []
  for(let i = 0; i < projects.length; i++){
    list[i] = <ProjectResume 
      title={projects[i].title}
      link={projects[i].link}
      description={projects[i].description}
    />
  }
  return list
}, [projects])

React.useEffect(() => { // updates the number of completed tasks
  setProjectResume(updateProjectResume(projects))
}, [updateProjectResume, projects])


React.useEffect(() => { // store workExp in localStorage
  localStorage.setItem('projects', JSON.stringify(projects))
}, [projects])

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function updateValues(event){ //updates values for Education and Personal Details
    //console.log(event.target.name, event.target.value)
    setValues({
        ...values, 
        [event.target.name] : event.target.value
    })
}

  const componentRef = useRef();
  const handleDownload = useReactToPrint({ //handle the function of the download button
    content: () => componentRef.current,
  });

  function restart(){
    if(window.confirm("Do you want to start over? All values will be deleted.")){
      console.log('cleared');
      setProjects([
        {
          title: "",
          link: "",
          description: ""
        }
        ])

        setWorkExps([
          {
            workPlace: "",
            position: "",
            startEnd: "",
            responsibilities: ""
          }
        ])

        setValues({ 
          firstName: "",
          lastName : "", 
          email : "",
          location : "",
          portfolioLink : "",
          schoolName : "",
          schoolLocation : "",
          courses : "",
          graduation : "",
          degree : "",
          major : "",
          phone : ""
      })
    }else{
      console.log('canceled');
    }
  }

  return (
    <div className="App" style={{}}>
      <div className="form">
        <Form 
          values={values}
          updateValues={updateValues}
          
          handleDownload={handleDownload}
          workExpsList={workExpsList}
          addWorkExpCard={addWorkExpCard}

          projectsList={projectsList}
          addProjectCard={addProjectCard}
        />
        <Button style={{
           marginTop: "200px",
           marginRight: "-140px",
           float: "right",
           backgroundColor: "#E0E0E0",
           border: "1px solid #E0E0E0",

        }} 
        variant="outlined" color="error" onClick={() => restart()}>
            Restart
        </Button>
      </div>
      <div ref={componentRef} className="resume">
        <Resume 
          values={values}
          workExpResume={workExpResume}
          projectResume={projectResume}
          workExps={workExps}
          projects={projects}
        />
      </div>
    </div>
  );
}

export default App;
