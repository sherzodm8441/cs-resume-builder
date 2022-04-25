import React from "react";
import '../index.css';


export default function workExpResume(props){
    return(
        <div className="exp">
            <div className="expLeft">
                <div id="workplace">{props.workPlace}</div>
                <div id="position">{props.position}</div>
                <div id="startEnd">{props.startEnd}</div>
            </div>
            
            <div id="responsibilities">{props.responsibilities}</div>
        </div>
    )
}