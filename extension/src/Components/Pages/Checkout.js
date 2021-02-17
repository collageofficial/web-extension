import React, { useContext, useState } from 'react'
import { Context } from './../../Context/Context'
import CreateNewBoard from '../Organisms/CreateNewBoard'
import CaptionForm from '../Organisms/CaptionForm'
import Button from '../Atoms/Button'
import Hr from '../Atoms/Hr'
import Text from '../Atoms/Text'

const Checkout = () => {
    const context = useContext(Context)
    const [uploadFailed, setUploadFailed] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const toggleModal = () => setIsModalOpen(!isModalOpen)

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
                    : /* lalala */
                      context.exitCheckoutPage()
            )
        })
    }

    return (
        <>
            <div className="w-full h-full flex justify-center items-center flex-wrap relative">
                {isModalOpen ? (
                    <CreateNewBoard action={toggleModal} />
                ) : (
                    <>
                        <div className="flex justify-start w-1/2 m-small justify-around absolute top-0">
                            <Button
                                special=""
                                text="Cancel"
                                color="light"
                                textSize="medium"
                                textWeight="normal"
                                bgColor="primary"
                                width="20"
                                height="10"
                                borderRadius="small"
                                action={context.goBackToSelect}
                            />
                            <Button
                                special=""
                                text="Create a new moodboard"
                                color="light"
                                textSize="small"
                                textWeight="normal"
                                bgColor="primary"
                                width="28"
                                height="10"
                                borderRadius="small"
                                action={toggleModal}
                            />
                        </div>
                        {/* <button onClick={context.goBackToSelect}>
                want to change pictures? click here
            </button> */}

                        <CaptionForm />

                        <div className="absolute w-full items-center bottom-0">
                            <Hr thickness="2" width="full" bgColor="grey" />
                            <div className="flex justify-center w-full m-small">
                                <Button
                                    special=""
                                    text="POST MY PICTURES"
                                    color="light"
                                    textSize="medium"
                                    textWeight="normal"
                                    bgColor="primary"
                                    width="52"
                                    height="10"
                                    borderRadius="small"
                                    action={postPictures}
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
            {uploadFailed && (
                <Text
                    special="m-small"
                    text="ERROR"
                    color="dark"
                    fontWeight="normal"
                    textSize="medium"
                />
            )}
        </>
    )
}

export default Checkout
