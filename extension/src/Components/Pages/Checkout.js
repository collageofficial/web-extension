import React, { useContext } from 'react'
import { Context } from './../../Context/Context'
import CaptionForm from '../Organisms/CaptionForm'

const Checkout = () => {
    const context = useContext(Context)

    return (
        <div>
            <button onClick={context.goBackToSelect}>
                want to change pictures? click here
            </button>
            <CaptionForm />
            <button onClick={context.exitCheckoutPage}>
                POST MY PICTURES!!
            </button>
        </div>
    )
}

export default Checkout
