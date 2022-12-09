import React from 'react';

const Buttons = ({backActive = false, nextStep, backStep, message, submitInfo}) => {


    return (
        <div className='buttons-container'>
            {backActive? <button type='button' onClick={()=>{backStep()}} className='btn btn--secondary'>Go Back</button>: <div/>}
            <button type={submitInfo? submitInfo.type:"button"} form={submitInfo? submitInfo.form:""} className='btn btn--primary' onClick={()=>nextStep()}>{message}</button>
        </div>
    );
}

export default Buttons;
