import React, { useContext, useState } from 'react'
import { Context } from './../../Context/Context'
import CaptionForm from '../Organisms/CaptionForm'

const Checkout = () => {
    const context = useContext(Context)
    const [uploadFailed, setUploadFailed] = useState(false)

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
            ).then((res) =>
                res.status !== 201
                    ? setUploadFailed(true)
                    /* lalala */
                    : console.log('finish') && context.exitCheckoutPage
            )
        })
    }

    return (
        <>
            <button onClick={context.goBackToSelect}>
                want to change pictures? click here
            </button>
            <CaptionForm />
            <button onClick={postPictures}>POST MY PICTURES!!</button>
            {uploadFailed && <p>ERROR</p>}
        </>
    )
}

export default Checkout
