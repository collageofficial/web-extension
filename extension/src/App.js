import React, { useContext } from 'react'
import { Context } from './Context/Context'
import './tailwind.css'

// temporary pages
import Login from './Components/Pages/Login'
import ImageSelect from './Components/Pages/ImageSelect'
import Checkout from './Components/Pages/Checkout'
import End from './Components/Pages/End'

// atoms
 import Button from './Components/Atoms/Button'
import Text from './Components/Atoms/Text'
import Input from './Components/Atoms/Input'
import Image from './Components/Atoms/Image'
<<<<<<< HEAD
import ClickDrop from './Components/Atoms/ClickDrop'
=======
import Hr from './Components/Atoms/Hr'
import Logo from './Components/Atoms/Logo'

>>>>>>> 2d9c98ed15202e2b8acbac792cdc32eff7f83fd0
// molecules
import DropDownMenu from './Components/Molecules/Dropdown'
import SignIn from './Components/Molecules/SignIn'

const App = () => {
    const context = useContext(Context)

    return (
        <div className="w-full h-full">
            {/* {context.loginPage && <Login />}
            {context.selectPage && <ImageSelect />}
            {context.checkoutPage && <Checkout />}
            {context.endPage && <End />} */}
        </div>
    )
}

export default App
