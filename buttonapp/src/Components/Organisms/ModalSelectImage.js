import { React, useContext } from 'react'
import { Context } from '../../../../buttonapp/src/Context/Context'

import Text from '../Atoms/Text'
import Button from '../Atoms/Button'
import Input from '../Atoms/Input'
import Spinner from '../Atoms/Spinner'
import SaveBox from '../Molecules/SaveBox'

const ModalSelectImage = () => {
    const context = useContext(Context)

    return (
        <div className="w-3/5 h-4/5 p-small">
            <Button
                action={context.modalSelectOpenToggle}
                width="8"
                height="8"
                borderRadius="full"
                bgColor="primary"
                color="light"
                borderColor="primary"
                textSize="large"
                notBackArrow={false}
            />
            <div className="flex flex-col items-center w-full">
                <Text
                    text="Save ideas from website"
                    color="dark"
                    fontWeight="normal"
                    textSize="large"
                    textAlign="center"
                />
                <Text
                    text="Select desidered images"
                    color="dark"
                    fontWeight="normal"
                    textSize="middle"
                    textAlign="center"
                />
            </div>
            <div className="w-full mb-small">
                {context.urlValue ? (
                    <div className="w-full flex justify-between items-center gap-2 border-2 border-primary rounded-full">
                        <div className="w-4/5 h-full p-small">
                            <Text
                                text={context.urlValue}
                                color="dark"
                                fontWeight="normal"
                                textSize="normal"
                            />
                        </div>
                        <Button
                            action={context.deleteUrlValue}
                            width="10"
                            height="10"
                            borderRadius="full"
                            bgColor="primary"
                            color="light"
                            borderColor="primary"
                            textSize="large"
                            notCancel={false}
                        />
                    </div>
                ) : (
                    <div className="flex w-full justify-between items-center gap-1">
                        <Input
                            onChange={(e) => context.getUrlValueSecondPage(e)}
                            text="Enter website"
                            textWeight="normal"
                            bgColor="light"
                            width="full"
                            height="10"
                            border="2"
                            borderColor="grey"
                            borderRadius="full"
                        />
                        <Button
                            action={context.matchUrlsValue}
                            text="Get images"
                            color="light"
                            textSize="medium"
                            textWeight="normal"
                            bgColor="primary"
                            width="1/5"
                            height="10"
                            borderRadius="small"
                        />
                    </div>
                )}
            </div>
            <div className="w-full h-3/5 mb-small">
                {context.browserPictures.length > 1 ? (
                    <p>image are here</p>
                ) : (
                    <div className="w-full h-full flex justify-center items-center">
                        <Spinner />
                    </div>
                )}
            </div>
            <div className="w-full h-1/5">
                <SaveBox />
            </div>
        </div>
    )
}

export default ModalSelectImage
