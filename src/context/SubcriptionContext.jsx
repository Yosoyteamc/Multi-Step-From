import React, { useState } from "react";

const SubscriptionContext = React.createContext({});

export const SubscriptionContextProvider = ({children}) => {

    const [subscriptionInfo, setSubscriptionInfo] = useState([]);

    return (
    <SubscriptionContext.Provider value={{subscriptionInfo, setSubscriptionInfo}}>
        {children}
    </SubscriptionContext.Provider>)
}

export default SubscriptionContext;