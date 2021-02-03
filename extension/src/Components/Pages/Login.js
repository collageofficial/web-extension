import React, { useContext, useEffect, useState } from 'react'
import { Context } from './../../Context/Context'

import Logo from '../Atoms/Logo'
import Text from '../Atoms/Text'
import Input from '../Atoms/Input'
import Button from '../Atoms/Button'

const Login = () => {
    const context = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [reload, setReload] = useState(false)
    const [loginFailed, setLoginFailed] = useState(false)

    const logIn = async (e) => {
        e.preventDefault()
        setLoginFailed(true)
        fetch('http://localhost:4000/auth', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((res) => {
                res.status !== 200
                    ? setLoginFailed(true)
                    : context.exitLoginPage()
                return res.json()
            })
            .then((data) => context.setToken(data.token))
    }
    const handleChange = (e) => {
        e.preventDefault()
        e.target.id === 'email'
            ? setEmail(e.target.value)
            : setPassword(e.target.value)
        setReload(true)
        console.log(email)
        console.log(password)
    }

    useEffect(() => {
        setReload(false), [reload]
    })
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
                {loginFailed && (
                    <Text
                        text="Please try again"
                        color="dark"
                        fontWeight="normal"
                        textSize="medium"
                    />
                )}
            </div>
            <form onChange={handleChange}>
                <div className="w-full h-1/6 flex flex-col justify-evenly items-center">
                    <label htmlFor="email"></label>
                    <Input
                        text="Your email"
                        textWeight="200"
                        bgColor="light"
                        width="72"
                        height="10"
                        border="2"
                        borderColor="grey"
                        borderRadius="small"
                        type="text"
                        id="email"
                    />
                    <label htmlFor="password"></label>
                    <Input
                        text="Password"
                        textWeight="200"
                        bgColor="light"
                        width="72"
                        height="10"
                        border="2"
                        borderColor="grey"
                        borderRadius="small"
                        type="text"
                        id="password"
                        required
                    />
                </div>
                <div className="w-full h-1/5 flex flex-col justify-center items-center">
                    <Button
                        text="Go to next step"
                        color="light"
                        textSize="medium"
                        textWeight="normal"
                        bgColor="primary"
                        width="72"
                        height="10"
                        borderRadius="small"
                        action={logIn}
                    />
                </div>
            </form>
        </div>
    )
}

export default Login
