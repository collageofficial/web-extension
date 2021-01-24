import React, { useContext } from 'react'
import { Context } from './Context/Context'
import Login from './Components/Pages/Login'
import ImageSelect from './Components/Pages/ImageSelect'
import Checkout from './Components/Pages/Checkout'
import End from './Components/Pages/End'

/* import Button from './Components/Atoms/Button'
import Text from './Components/Atoms/Text'
import Input from './Components/Atoms/Input' */

const App = () => {
    const context = useContext(Context)

    return (
        <div>
            {context.loginPage && <Login/>}
            {context.selectPage && <ImageSelect />}
            {context.checkoutPage && <Checkout/>}
            {context.endPage && <End/>}
            {/*  <Button
                text="Button"
                color="light"
                textSize="medium"
                textWeight="normal"
                bgColor="primary"
                width="20"
                height="10"
                borderRadius="small"
            />
            <Button
                text="Button"
                color="dark"
                textSize="medium"
                textWeight="normal"
                bgColor="light"
                width="20"
                height="10"
                border="2"
                borderColor="dark"
                borderRadius="small"
            />
            <Button
                text="Button"
                color="primary"
                textSize="medium"
                textWeight="normal"
                bgColor="light"
                width="20"
                height="10"
                border="2"
                borderColor="primary"
                borderRadius="small"
            />
            <Button
                special="plus-btn"
                width="5"
                height="5"
                borderRadius="full"
            />
            <Button
                special="plus-btn-border"
                width="5"
                height="5"
                border="2"
                borderRadius="full"
            />
            <Button
                special="plus-btn"
                width="8"
                height="8"
                borderRadius="full"
            />
            <Input
                text="E.g. “Places to go” or “Recipes to make”"
                textWeight="200"
                bgColor="light"
                width="96"
                height="14"
                border="2"
                borderColor="grey"
                borderRadius = 'small'
            /> */}
        </div>
    )
}

export default App
