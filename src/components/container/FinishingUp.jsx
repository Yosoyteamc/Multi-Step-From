import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SubscriptionContext from '../../context/SubcriptionContext';

const FinishingUp = () => {

    const subscriptionContext = useContext(SubscriptionContext);
    const {subscriptionInfo} = subscriptionContext;

    const navigate = useNavigate();

    useEffect(() => {   
        if(!subscriptionInfo.plan || !subscriptionInfo.addOns){
            navigate('/subscription/register', {replace: true});
        }
    }, [])
    
    const confirm = () => {
        subscriptionContext.setSubscriptionInfo({...subscriptionContext.subscriptionInfo, toConfirm: true});
    }

    return (
        <section className='container'>
            <h1 className='title'>Finishing Up</h1>
            <p className='details'>Double-check everthing look OK before confirming.</p>
            <div className='finishing-table'>
                <div className='finishing-table__row finishing-table__row-main '>
                    <div className='finishing-table__row-title finishing-table__row-title-main'>
                        <h1 className='finishing-table__row-title-plan'>{subscriptionInfo.plan?.title} ({
                            subscriptionInfo.plan?.price.toString().includes("month")? "month": "year"
                            }ly)</h1>
                        <Link className='finishing-table__row-title' to={"/subscription/plans"} onClick={()=>{confirm()}}>Change</Link>
                    </div>
                    <div className='finishing-table__row-value finishing-table__row-value-plan'>{subscriptionInfo.plan?.price.toString().replace("month","mo").replace("year","yr")}</div>
                </div>
                {
                    subscriptionInfo.addOns?.map((addOn, index) => {
                        if (addOn?.active){
                             return(                
                                    <div key={index} className='finishing-table__row'>
                                        <div className='finishing-table__row-title'>{addOn.title}</div>
                                        <div className='finishing-table__row-value'>{addOn.time.toString().replace("month","mo").replace("year","yr")}</div>
                                    </div>
                            )
                        }
                    })
                }
            </div>
            <div className='finishing-table__total'>
                <div className='finishing-table__total-title'>Total(per {subscriptionInfo.plan?.price.toString().includes("month")? "month": "year"})</div>
                <div className='finishing-table__total-value'>{
                    subscriptionInfo.addOns?.reduce((total, addOn) => {
                        if(addOn?.active) {
                            total += parseInt(addOn.time.toString().replace("+", "").replace("/year", "").replace("/month", ""));
                        }
                        return total;
                    }, parseInt(subscriptionInfo.plan.price.toString().replace("$", "")))
                    + `/${subscriptionInfo.plan?.price.toString().includes("month")? "mo": "yr"}`
                }
                </div>
            </div>
        </section>
    );
}

export default FinishingUp;
