import React, { useContext } from 'react'
import { Context } from './Context/Context'

import CardContainer from './Components/Organisms/CardContainer'
import Button from './Components/Atoms/Button'
import Text from './Components/Atoms/Text'

const App = () => {
    const context = useContext(Context)
    return (
        <div>

      <Button
                text="Button"
                bgColor="primary"
                width="20"
                height="10"
                color="light"
                borderRadius="lg"
            />
<button id="getImages">DO NOT CHANGE MY ID PLEASE</button>
  {/*     <CardContainer/> */}
            <Button
                text="Button"
                bgColor="primary"
                width="20"
                height="10"
                color="light"
                borderRadius="lg"
            />

            <Button
                text="Button"
                bgColor="light"
                width="20"
                height="10"
                color="dark"
                border="2"
                borderColor="dark"
                borderRadius="lg"
            />

            <Button
                text="Button"
                bgColor="light"
                width="20"
                height="10"
                color="primary"
                border="2"
                borderColor="primary"
                borderRadius="lg"
            />

            <Button
                text="+"
                bgColor="primary"
                width="5"
                height="5"
                color="light"
            />
            {/* <Text text="Hello world!" bgColor="primary" color="light" /> */}
        </div>
    )
}

export default App
