import React, { useContext } from 'react'
import { Context } from './Context/Context'
import './tailwind.css'
import Login from './Components/Pages/Login'
import ExtenActivated from './Components/Organisms/ExtenActivated'
import Checkout from './Components/Pages/Checkout'
import End from './Components/Pages/End'

const App = () => {
    const context = useContext(Context)

    return (
        <div className="w-full h-full">
            {context.loginPage && <Login />}
            {context.selectPage && <ExtenActivated />}
            {context.checkoutPage && <Checkout />}
            {context.endPage && <End />}
        </div>
    )
}

export default App
