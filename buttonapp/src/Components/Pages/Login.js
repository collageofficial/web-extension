import React, { useContext, useEffect, useState } from 'react'
import { Context } from './../../Context/Context'
import { get, post } from '../../util/fetch'

const Login = () => {
    const context = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [reload, setReload] = useState(false)
    const [loginFailed, setLoginFailed] = useState(false)

    const logIn = async (e) => {
        e.preventDefault()

        // post never crashes,
        // you either get something
        // or you get nothing or error

        // token, and expires are available if succeed
        const { error, token, expires } = await post(`profiles/${email}/auths`)(
            {
                body: { password: password },
            }
        )
        if (error) {
            // TODO show error to user
            // error.message
            // or
            // throw error
            setLoginFailed(true)
            return
        }
        const profile = await get('me')({ token: token })
        context.closeLoginToggle()
        context.setToken(token)
        context.setProfile(profile)
        // we should save token to cookie / localstorage for session persistance
        // preferable with flag 'secure'
    }
    const handleChange = (e) => {
        e.preventDefault()
        e.target.id === 'email'
            ? setEmail(e.target.value)
            : setPassword(e.target.value)
        setReload(true)
    }

    useEffect(() => setReload(false))

    return (
        <>
            {loginFailed && <p>PLEASE TRY AGAIN</p>}
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
