import React from "react"


export default function Resume(props){

    return(
    <div>
        <h1>{props.values.firstName}{props.values.lastName}</h1>
    </div>
    )
}