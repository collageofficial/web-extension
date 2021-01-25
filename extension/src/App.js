import React, { useContext } from 'react'
import { Context } from './Context/Context'
import './tailwind.css'

import Login from './Components/Pages/Login'
import ImageSelect from './Components/Pages/ImageSelect'
import Checkout from './Components/Pages/Checkout'
import End from './Components/Pages/End'

import Button from './Components/Atoms/Button'
import Text from './Components/Atoms/Text'
import Input from './Components/Atoms/Input' 
import DropDownMenu from './Components/Molecules/Dropdown'

const App = () => {
    const context = useContext(Context)

    return (
        <div>
            {/* {context.loginPage && <Login />}
            {context.selectPage && <ImageSelect />}
            {context.checkoutPage && <Checkout />}
            {context.endPage && <End />} */}
        </div>
    )
}

export default App
