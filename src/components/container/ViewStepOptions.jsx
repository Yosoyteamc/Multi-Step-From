import React, { useState, useEffect }  from 'react';
import StepOption from '../pure/StepOption';


const ViewStepOptions = ({ChangeSelected = 0}) => {

    const stepOptions = ["Your info" , "Select a plan" , "Add-ons" , "Summary"]
    const [selected, setSelected] = useState("Your info");

    useEffect(() => {
        setSelected(stepOptions[ChangeSelected]);
    },[ChangeSelected])

    return (
        <nav className='navbar'>
            <ul className='navbar-content'>
            { stepOptions.map((stepOption, index) => {
                const state = (selected === stepOption && true); 
                return <StepOption key={index} number={index + 1} title={stepOption} selected={state}/>
            })}
            </ul>
        </nav>
    );
}

export default ViewStepOptions;
