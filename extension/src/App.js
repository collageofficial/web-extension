import React, { useContext } from 'react'
import { Context } from './Context/Context'
import './App.css'

import CardContainer from './Components/Organisms/CardContainer'
import Button from './Components/Atoms/Button'
import Text from './Components/Atoms/Text'

const App = () => {
    const context = useContext(Context)
    return (
        <>
            {/* test stuffs, delete them after
            <h1>hello</h1>
            <h1>Counter with Hook State</h1>
            <h1>{context.counter}</h1>
            <button onClick={() => context.setCounter(context.counter + 1)}>
                Increment
            </button>
            <hr /> */}
            <button id="getImages">DO NOT CHANGE MY ID PLEASE</button>
            {/* <CardContainer /> */}
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
            {/* <Text text="Hello world!" bgColor="primary" color="light" /> */}
        </>
    )
}

export default App
