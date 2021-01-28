import React, { useContext } from 'react'
import { Context } from './../../Context/Context'
import CaptionForm from '../Organisms/CaptionForm'

const Checkout = () => {
    const context = useContext(Context)

    const postPictures = () => {
        context.picturesToSave.map((picture) => {
            fetch(
                `http://localhost:4000/profiles/albums/${picture.album}/uploadimage`,
                {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json',
                        'x-auth-token': context.token,
                    }),
                    body: JSON.stringify({
                        file_name: picture.filename,
                        caption: picture.caption,
                        origin: picture.origin,
                        size: {
                            width: picture.size.width,
                            height: picture.size.height,
                        },
                        ratio: picture.ratio,
                        src: picture.src,
                    }),
                }
            )
        })

        context.exitCheckoutPage
    }

    return (
        <>
            <button onClick={context.goBackToSelect}>
                want to change pictures? click here
            </button>
            <CaptionForm />
            {/* with this button i need to sent context.picturesToSave inside the backend */}
            <button onClick={postPictures}>POST MY PICTURES!!</button>
        </>
    )
}

export default Checkout
