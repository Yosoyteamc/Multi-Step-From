import React from 'react';

const StepOption = ({number, title, selected}) => {
    return (
        <li className='option'>
            <span className={`option__number ${selected? 'option__number--selected': undefined }`}>{number}</span>
            <div className='option__text'>
                <h3 className='option__text-step'>{ "STEP "+ number }</h3>
                <h2 className='option__text-title'>{ title }</h2>
            </div>
        </li>
    );
}

export default StepOption;
