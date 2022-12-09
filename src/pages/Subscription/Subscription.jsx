import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate} from 'react-router-dom';
import ViewStepOptions from '../../components/container/ViewStepOptions';
import Author from '../../components/pure/Author';
import Buttons from '../../components/pure/Buttons';
import SubscriptionContext from '../../context/SubcriptionContext';
// import SubcriptionContext from '../../context/SubcriptionContext';

const submitInfo = {type: "submit", form: "form-subscription"};

export const changeStep = () => {

}


const Subscription = () => {
    
    const [step, setStep] = useState(0);
    const [success, setSuccess] = useState(false);
    const [backActive, setBackActive] = useState(false);
    const [message, setMessage] = useState("Next Step");
    const subcriptionContext = useContext(SubscriptionContext);
    const navigate = useNavigate();
    // const { subscriptionInfo } = React.useContext(SubcriptionContext);
    
    const nextStep = () => {
        if(step === 0 ) {
            return;
        }
        step < 3 && setStep(step + 1);
        if(step === 1){
            if(!subcriptionContext.subscriptionInfo.plan) {
                setStep(1);
                return;
            }
            setMessage("Next Step");
            navigate('/subscription/pick-add-ons');
        }
        if(step === 2) {
            setMessage("Confirm");
            navigate('/subscription/confirm');
        };
        if(step === 3) {
            setMessage("Confirm");
            navigate('/subscription/success');
            setSuccess(true);
        };
        setBackActive(true);
    }

    const backStep = () => {
        if(step === 0){
            subcriptionContext.setSubscriptionInfo({});
            setBackActive(false)
        };
        if(step === 1){
            navigate('/subscription/register');
            setBackActive(false)
            setStepOne(true);
        };
        if(step === 2){
            setMessage("Next Step");
            navigate('/subscription/plans');
        }
        if(step === 3){
            setMessage("Next Step");
            navigate('/subscription/pick-add-ons');
        }
        step > 0 && setStep(step - 1);
    }

    const [stepOne, setStepOne] = useState(true); 

    useEffect(() => {
        if(stepOne) {
            if(subcriptionContext.subscriptionInfo.name) {
                setStep(1);
                step === 0 && setBackActive(true);
                setStepOne(false);
            }
        }

        if(subcriptionContext.subscriptionInfo.toConfirm) {
            subcriptionContext.setSubscriptionInfo({...subcriptionContext.subscriptionInfo, toConfirm: false});
            setStep(1)
            setMessage("Next Step");
            setBackActive(true);
        }
    }, [subcriptionContext]);

    return (
        <>  
            <ViewStepOptions ChangeSelected={step}/>
            <Outlet/>
            { !success? <Buttons submitInfo={step === 0? submitInfo: undefined}
                     backActive={backActive} 
                     backStep={backStep}     
                     nextStep={nextStep} 
                     message={message}
            />: <Author></Author>}
        </>
    );
}

export default Subscription;
