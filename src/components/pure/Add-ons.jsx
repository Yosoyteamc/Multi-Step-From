import React from 'react';

const AddOns = ({addOn, checkedAddOns, isChecked}) => {

    const handleActive = (e) => {
        e.target.checked? e.target.parentElement.classList.add('add-on--selected'): e.target.parentElement.classList.remove('add-on--selected');
        sendChecked();
    }

    const sendChecked = () => {
        checkedAddOns(addOn)
    }

    return (
        <button className={`add-on ${isChecked? 'add-on--selected': undefined}`}>
            <input id="inputCheck" onChange={handleActive} defaultChecked={isChecked} className='add-on__active' type="checkbox" value="active"/>
            <div className='add-on-content'>
                <h2 className='add-on__title'>{addOn.title}</h2>
                <p className='add-on__description'>{addOn.description}</p>
            </div>
            <p className='add-on__time'>{addOn.time}</p>
        </button>
    );
    
}

export default AddOns;
