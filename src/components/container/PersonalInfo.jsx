import React from 'react';
import FormSubscription from '../pure/forms/FormSubscription';

const PersonalInfo = () => {
    return (
        <section className='container'>
            <h1 className='title'>Personal info</h1>
            <p className='details'>Please provide your name, email adress, and phone number.</p>
            <FormSubscription/>
        </section>
    );
}

export default PersonalInfo;
