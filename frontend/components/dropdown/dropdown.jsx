import React, { useState } from "react";

function dropdown(){
    const [state, setState] = useState(false);
    const isShowing = () =>{
        setState(true); 
    }
    const isHidden = () =>{
        setState(false);
    }
    return(
        <div className="dropdown">
            <div className="dropdown-menu" onMouseEnter={isShowing} onMouseLeave={isHidden}>
                <ul onMouseEnter={isShowing}>
                    <li>val1</li>
                    <li>val2</li>
                    <li>val3</li>
                    <li>val4</li>
                </ul>
            </div>
        </div>
    )
}

export default dropdown;