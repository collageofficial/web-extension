import React, { useContext } from 'react'
import { Context } from './../../Context/Context'

const Checkout = () => {
    const context = useContext(Context)

    return (
        <div>
            this pages is to check images and to correct the captions
            <button onClick={context.exitCheckoutPage}>POST MY PICTURES!!</button>
        </div>
    )
}

export default Checkout