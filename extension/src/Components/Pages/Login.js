import React, { useContext } from 'react'
import { Context } from './../../Context/Context'

const Login = () => {
    const context = useContext(Context)

    return (
        <>
            hello. log in first please
            <button onClick={context.exitLoginPage}>log in</button>
        </>
    )
}

export default Login
