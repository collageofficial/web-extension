import React, { useContext, useEffect, useState } from 'react'
import { Context } from './../../Context/Context'

const Login = () => {
    const context = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [reload, setReload] = useState(false)

    const logIn = async (e) => {
        e.preventDefault()
        fetch('http://localhost:4000/auth', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        }).then((res) => {
            console.log(res)
        })
    }
    const handleChange = (e) => {
        e.preventDefault()
        e.target.id === 'email'
            ? setEmail(e.target.value)
            : setPassword(e.target.value)
        setReload(true)
    }

    useEffect(() => {
        setReload(false), [reload]
    })
    return (
        <>
            <form onChange={handleChange}>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" required />
                <button onClick={logIn}>log in</button>
            </form>
        </>
    )
}

export default Login

/* {context.exitLoginPage} */
