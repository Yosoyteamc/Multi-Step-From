import { Navigate, Route, Routes } from "react-router-dom"
import FinishingUp from "./components/container/FinishingUp"
import PersonalInfo from "./components/container/PersonalInfo"
import PickAddOns from "./components/container/PickAddOns"
import SelectPlan from "./components/container/SelectPlan"
import Success from "./components/container/Success"
import {SubscriptionContextProvider} from "./context/SubcriptionContext"
import Subscription from "./pages/Subscription/Subscription"

function App() {

  return (
  <>
    <SubscriptionContextProvider>
    <Routes>
      <Route index path="/Multi-Step-From/" element={<Navigate to="Multi-Step-From/subscription/register" replace={true}></Navigate>}/>
      <Route path="/Multi-Step-From/subscription" element={<Navigate to="Multi-Step-From/subscription/register" replace={true}></Navigate>}/>
      <Route exact path="Multi-Step-From/subscription" element={ <Subscription/> }>
        <Route index path="Multi-Step-From/register" element={<PersonalInfo/>}/>
        <Route path="Multi-Step-From/plans" element={<SelectPlan/>}/>
        <Route path="Multi-Step-From/pick-add-ons" element={<PickAddOns/>}/>
        <Route path="Multi-Step-From/confirm" element={<FinishingUp/>}/>
        <Route path="Multi-Step-From/success" element={<Success/>}/>
        <Route path="*" element={<Navigate to="Multi-Step-From/subscription/register" replace={true}></Navigate>} />
      </Route>
      <Route path="*" element={<Navigate to="Multi-Step-From/subscription/register" replace={true}></Navigate>} />
    </Routes>
    </SubscriptionContextProvider>
  </>
  )
}

export default App
