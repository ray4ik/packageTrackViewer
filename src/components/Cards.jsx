// to let know the compiler this file needs to be render as recact 
import React from "react"

//create element to render

export default function Card(props) {
    const {title, decr} = props; 

    return (
        <article className="card">
        <h2>{title}</h2>
        <p>{decr}</p>
        </article>
    );
}


//export default function Card()
//mandatory but better to move "export default" to function line 6. 
//It will not work if we have different diff components here 
//export default Card;
// 1 file 1 component 1 function 