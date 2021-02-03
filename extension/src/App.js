import React, { useContext } from 'react'
import { Context } from './Context/Context'
import './tailwind.css'

// temporary pages
import Login from './Components/Pages/Login'
import ExtenActivated from './Components/Organisms/ExtenActivated'
import Checkout from './Components/Pages/Checkout'
import End from './Components/Pages/End'

// atoms
import Button from './Components/Atoms/Button'
import Text from './Components/Atoms/Text'
import Input from './Components/Atoms/Input'
import Image from './Components/Atoms/Image'
import ClickDrop from './Components/Atoms/ClickDrop'
import Hr from './Components/Atoms/Hr'
import Logo from './Components/Atoms/Logo'

// molecules
import DropDownMenu from './Components/Molecules/Dropdown'
import CollageLogo from './Components/Molecules/collageLogo'
import CardAdded from './Components/Molecules/CardAdded'
import SignIn from './Components/Molecules/SignIn'
import DragDrop from './Components/Molecules/DragDrop'
import NewBoard from './Components/Molecules/NewBoard'
import SaveBox from './Components/Molecules/SaveBox'
import SavedPicture from './Components/Molecules/SavedPicture'
import SaveBoard from './Components/Molecules/SaveBoard'
import BoardHovered from './Components/Molecules/BoardHovered'

// organism
import Modal from './Components/Organisms/Modal'

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
