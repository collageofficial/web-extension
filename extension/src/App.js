import React, { useContext } from 'react'
import { Context } from './Context/Context'
import Login from './Components/Pages/Login'
import ImageSelect from './Components/Pages/ImageSelect'
import Checkout from './Components/Pages/Checkout'
import End from './Components/Pages/End'

import Button from './Components/Atoms/Button'
import Text from './Components/Atoms/Text'
import Input from './Components/Atoms/Input' 

const App = () => {
    const context = useContext(Context)

    return (
        <div>
            {/* {context.loginPage && <Login/>}
            {context.selectPage && <ImageSelect />}
            {context.checkoutPage && <Checkout/>}
            {context.endPage && <End/>} */}
             <Button
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
            />
            <Text 
            text="Primary 24" 
            color="primary" 
            fontWeight="normal" 
            textSize="large" 
            />
            <Text 
            text="White 24"
            color="light"
            fontWeight="normal" 
            textSize="large"
            />
            <Text 
            text="Grey 24"
            color="grey"
            fontWeight="normal" 
            textSize="large"
            />
            <Text 
            text="Dark 24"
            color="dark"
            fontWeight="normal" 
            textSize="large"
            />
            {/* text size medium  */}
            <hr />
            <Text 
            text="Primary 18" 
            color="primary" 
            fontWeight="normal" 
            textSize="medium" 
            />
            <Text 
            text="White 18"
            color="light"
            fontWeight="normal" 
            textSize="medium"
            />
            <Text 
            text="Grey 18"
            color="grey"
            fontWeight="normal" 
            textSize="medium"
            />
            <Text 
            text="Dark 18"
            color="dark"
            fontWeight="normal" 
            textSize="medium"
            />
            {/* text size small bold  */}
            <hr />
            <Text 
            text="Primary 12" 
            color="primary" 
            fontWeight="bold" 
            textSize="small" 
            />
            <Text 
            text="White 12"
            color="light"
            fontWeight="bold" 
            textSize="small"
            />
            <Text 
            text="Grey 12"
            color="grey"
            fontWeight="bold" 
            textSize="small"
            />
            <Text 
            text="Dark 12"
            color="dark"
            fontWeight="bold" 
            textSize="small"
            />
            {/* text size small normal  */}
            <hr />
            <Text 
            text="White 12"
            color="light"
            fontWeight="normal" 
            textSize="small"
            />
            <Text 
            text="Dark 12"
            color="dark"
            fontWeight="normal" 
            textSize="small"
            />
        </div>
    )
}

export default App
