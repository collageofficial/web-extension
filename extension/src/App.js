import React, { useContext } from 'react'
import { Context } from './Context/Context'

import Button from './Components/Atoms/Button'
import Text from './Components/Atoms/Text'

const App = () => {
    const context = useContext(Context)
    return (
        <>
            {/* test stuffs, delete them after */}
            {/* <h1>hello</h1>
      <h1>Counter with Hook State</h1>
      <h1>{context.counter}</h1>
      <button onClick={() => context.setCounter(context.counter + 1)}>
        Increment
      </button>
      <hr /> */}
            <Button
                text="+"
                textSize="medium"
                bgColor="primary"
                width="5"
                height="5"
                color="light"
                borderRadius="full"
            />
            {/* <Text text="Hello world!" bgColor="primary" color="light" /> */}
        </>
    )
}

export default App
