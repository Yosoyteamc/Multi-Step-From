import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import successIcon from '../../assets/images/icon-thank-you.svg';
import SubscriptionContext from '../../context/SubcriptionContext';

const Success = () => {

    const subcriptionContext = useContext(SubscriptionContext);

    const navigate = useNavigate(); 
    useEffect(() => {
        !subcriptionContext.subscriptionInfo.name && navigate("/subscription/register")
    }, []);

    return (
        <section className='container'>
            <img className='icon' src={successIcon} alt='success Icon'/>
            <h1 className='title title--center'>Thank you!</h1>
            <p className='details details--center'>Thanks for confirming your subscription!
            We hope you have fun using our platform. If you ever need support,
            please feel free to email us at support@loremgamming.com.
            </p>
        </section>
    );
}

export default Success;
