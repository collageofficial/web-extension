import { React, useContext } from 'react'
import { Context } from '../../Context/Context'

import Logo from '../Atoms/Logo'
import Text from '../Atoms/Text'
import Input from '../Atoms/Input'
import Button from '../Atoms/Button'

const SignIn = () => {
    const context = useContext(Context)

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="w-full h-2/5 flex flex-col justify-evenly items-center">
                <Logo />
                <Text
                    text="Welcome to Collage"
                    color="dark"
                    fontWeight="normal"
                    textSize="large"
                />
                <Text
                    text="Find new ideas for your inspirations"
                    color="dark"
                    fontWeight="normal"
                    textSize="medium"
                />
            </div>
            <div className="w-full h-1/6 flex flex-col justify-evenly items-center">
                <Input
                    text="Your email"
                    textWeight="200"
                    bgColor="light"
                    width="72"
                    height="10"
                    border="2"
                    borderColor="grey"
                    borderRadius="small"
                />
                <Input
                    text="Password"
                    textWeight="200"
                    bgColor="light"
                    width="72"
                    height="10"
                    border="2"
                    borderColor="grey"
                    borderRadius="small"
                />
            </div>
            <div className="w-full h-1/5 flex flec-col justify-center items-center">
                <Button
                    text="Go to next step"
                    color="light"
                    textSize="medium"
                    textWeight="normal"
                    bgColor="primary"
                    width="72"
                    height="10"
                    borderRadius="small"
                />
            </div>
        </div>
    )
}

export default SignIn
