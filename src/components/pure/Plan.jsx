import React, { useContext, useEffect } from 'react';
import arcade from '../../assets/images/icon-arcade.svg';
import advanced from '../../assets/images/icon-advanced.svg';
import pro from '../../assets/images//icon-pro.svg';
import SubscriptionContext from '../../context/SubcriptionContext';
import { useNavigate } from 'react-router-dom';

const planIcon = {arcade, advanced, pro};

const Plan = ({type, plan, active}) => {

    const subcriptionContext = useContext(SubscriptionContext);
    const planSelected = () => {
        subcriptionContext.setSubscriptionInfo({...subcriptionContext.subscriptionInfo, plan: {title: plan.title, time: whatTime(),  price:  plan.pricextime, description: plan.description}});
        active(type);
    }

    const whatTime = () => {
        const howPlan = plan?.price || "";
        if (howPlan.toString().includes('year')) {
            return 'year';
        } else {
            return 'month';
        }
    }

    const navigate = useNavigate();
    useEffect(() => {
        !subcriptionContext.subscriptionInfo.name && navigate("/subscription/register")
    }, [subcriptionContext]);


    return (
        <button className={`plan ${plan.active? 'plan--selected': undefined}`} type='button' onClick={planSelected}>
            <img className='plan__icon' src={planIcon[type]} alt={`icon-${type}`}></img>
            <div className='plan-content'>
                <h2 className='plan__title'>{plan.title}</h2>
                <p className='plan__price'>{plan.pricextime}</p>
                {plan.description? <p className='plan__description fade-in'>{plan.description}</p>: undefined}
            </div>
        </button>
    );
}

export default Plan;
