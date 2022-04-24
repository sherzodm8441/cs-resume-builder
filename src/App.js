import { useState, useRef } from "react"
import Form from "./components/Form"
import Resume from "./components/Resume";
import './index.css';
import { useReactToPrint } from "react-to-print";

function App() {

  //The three STATES and update functions below could have been combined into one. But the way it is now provides better readibility

  const [values, setValues] = useState({ //holds values for pages Education and Personal details 
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
    major : ""
})

const [workExp, setWorkExp] = useState({ //holds values for Work Experience (# of workExp are fixed)
    workPlace1 : "",
    position1 : "",
    startEnd1 : "",
    responsibilities1 : "",
    workPlace2 : "",
    position2 : "",
    startEnd2 : "",
    responsibilities2 : "",
    workPlace3 : "",
    position3 : "",
    startEnd3 : "",
    responsibilities3 : ""
})

const [projects, setProjects] = useState({ //holds values for Projects (# of projects are fixed)
    title1 : "",
    link1 : "",
    description1 : "",
    title2 : "",
    link2 : "",
    description2 : "",
    title3 : "",
    link3 : "",
    description3 : ""
})


function updateValues(event){ //updates values for Education and Personal Details
    //console.log(event.target.name, event.target.value)
    setValues({
        ...values, 
        [event.target.name] : event.target.value
    })
}

function updateWorkExp(event){ //updates values for work Experience
    setWorkExp({
        ...workExp, 
        [event.target.name] : event.target.value
    })
}

function updateProjects(event){ //updates values for Projects
    setProjects({
        ...projects, 
        [event.target.name] : event.target.value
    })
}

  const componentRef = useRef();
  const handleDownload = useReactToPrint({ //handle the function of the download button
    content: () => componentRef.current,
  });

  return (
    <div className="App">
      <div className="form">
        <Form 
          values={values}
          workExp={workExp}
          projects={projects}
          updateValues={updateValues}
          updateWorkExp={updateWorkExp}
          updateProjects={updateProjects}
          handleDownload={handleDownload}
        />
      </div>
      <div ref={componentRef} className="resume">
        <Resume 
          values={values}
          workExp={workExp}
          projects={projects}
          
        />
      </div>
    </div>
  );
}

export default App;
