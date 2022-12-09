import React, {useState} from 'react';
import Plan from '../pure/Plan';

const plans = {
    montly:[
        {
            title: "Arcade",
            pricextime: "$9/month",
        },
        {
            title: "Advanced",
            pricextime: "$12/month",
        },
        {
            title: "Pro",
            pricextime: "$15/month",
        }
    ],
    yearly:[
        {   
            title: "Arcade",
            pricextime: "$90/year",
            description: "2 months free"    
        },
        {   
            title: "Advanced",
            pricextime: "$120/year",
            description: "2 months free"
        },
        {
            title: "Pro",
            pricextime: "$150/year",
            description: "2 months free"
        }
    ]
};

const SelectPlan = () => {

    const [plan, setPlan] = useState(plans.montly);
    const [active, setActive] = useState(true);

    const changeActive = (type) => {
        const newPlan = plan.map((plan) => {
            if(plan.title.toLowerCase() === type) {
                plan.active = true;
            } else {
                plan.active = false;
            }
            return plan;
        });
        setPlan(newPlan);
    }

    return (
        <section className='container'>
            <h1 className='title'>Select your plan</h1>
            <p className='details'>You have the option of monthly or yearly billing.</p>
            <div className='plans'>
                {plan.map((plan, index) => <Plan key={index} type={plan.title.toLowerCase()} plan={plan} active={changeActive}/>)}
            </div>
            <div className='options'>
                <span className={`options__title ${active ? 'options__title--selected': undefined}`}>Monthly</span>
                <label className="switch">
                    <input type="checkbox"  onChange={() => {
                        setPlan(active ? plans.yearly : plans.montly)
                        setActive(!active)
                        }}
                    />
                    <span className="slider"></span>
                </label>
                <span className={`options__title ${!active ? 'options__title--selected': undefined}`}>yearly</span>
            </div>
        </section>
    );
}

export default SelectPlan;
