import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubscriptionContext from '../../context/SubcriptionContext';
import AddOns from '../pure/Add-ons';

const addOns ={ 
    monthly: [
        {
            title: 'Online services',
            description: 'Access to multiplayer games',
            time: '+1/month',
            active: true
        },
        {
            title: 'Large storage',
            description: 'Extra 1TB of cloud save',
            time: '+2/month',
            active: true
        },
        {
            title: 'Customizable profile',
            description: 'Custom theme on your profile',
            time: '+2/month',
            active: false
        }
    ],
    yearly: [   
        {
            title: 'Online services',
            description: 'Access to multiplayer games',
            time: '+10/year',
            active: true
        },
        {
            title: 'Large storage',
            description: 'Extra 1TB of cloud save',
            time: '+20/year',
            active: true
        },
        {
            title: 'Customizable profile',
            description: 'Custom theme on your profile',
            time: '+20/year',
            active: false
        }
    ]
}

const PickAddOns = () => {

    const subcriptionContext = useContext(SubscriptionContext);
    const [isMonthly, setIsMonthly] = useState(true);
    const [addOnsChecked, setAddOnsChecked] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const howPlan = subcriptionContext.subscriptionInfo?.plan?.price || "";
        howPlan.toString().includes('year') && setIsMonthly(false);
        !subcriptionContext.subscriptionInfo.name && navigate("/subscription/register")
    }, [subcriptionContext]);

    useEffect(() => {
        isMonthly? setAddOnsChecked(addOns.monthly): setAddOnsChecked(addOns.yearly);
        subcriptionContext.setSubscriptionInfo({...subcriptionContext.subscriptionInfo, addOns: isMonthly? addOns.monthly: addOns.yearly});
    }, [isMonthly]);

    const checkedAddOns = (addOn) => {
        addOn.active = !addOn.active;
        const newAddOns = addOnsChecked.map((addOnChecked) => {
            if(addOnChecked.title === addOn.title) {
                addOnChecked.active = addOn.active;
            }
            return addOnChecked;
        });
        setAddOnsChecked(newAddOns);
        subcriptionContext.setSubscriptionInfo({...subcriptionContext.subscriptionInfo, addOns: newAddOns});
    }

    return (
        <section className='container'>
            <h1 className='title'>Pick add-ons</h1>
            <p className='details'>Add-ons help enhance your game experience.</p>
            <div className='add-ons'>
                {   
                    isMonthly?
                    addOns.monthly.map((addOn, index) => <AddOns key={index} checkedAddOns={checkedAddOns} isChecked={addOn.active} addOn={addOn}/>):
                    addOns.yearly.map((addOn, index) => <AddOns key={index} checkedAddOns={checkedAddOns} isChecked={addOn.active} addOn={addOn}/>)
                }
            </div>
        </section>
    );
}

export default PickAddOns;
