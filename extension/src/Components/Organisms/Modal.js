import React, { useEffect, useContext } from 'react'
import { Context } from '../../Context/Context'

import Text from '../Atoms/Text'
import Hr from '../Atoms/Hr'
import Button from '../Atoms/Button'
import Image from '../Atoms/Image'
import Input from '../Atoms/Input'

const Modal = () => {
    const context = useContext(Context)

    return (
        <div className="h-screen flex flex-row  relative">
            {/* right block  */}
            <div className="w-96 h-full flex flex-col items-center ">
                <Image
                    height="72"
                    width=""
                    borderRadius="small"
                    url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                />
            </div>
            {/* left block  */}
            <div className="w-full h-full flex flex-col items-center  m-small ">
                <div className="m-small">
                    <Input
                        text="Search"
                        noGlass={false}
                        textWeight="200"
                        bgColor="light"
                        width="96"
                        height="14"
                        border="2"
                        borderColor="grey"
                        borderRadius="small"
                    />
                </div>
                {/* first static block top and line  */}
                <div className="flex flex-col w-full h-full m-small">
                    <div className="w-full h-6/12 m-small">
                        <Hr thickness="2" width="full" bgColor="grey" />
                        <Text
                            text="Top Mood Boards"
                            color="dark"
                            fontWeight="normal"
                            textSize="large"
                        />
                    </div>
                    {/* second block upper  */}
                    <div>
                        {/* 1 pack of img and description to picture  */}

                        <div className="flex flex-row m-small">
                            <Image
                                height="12"
                                width=""
                                borderRadius="small"
                                url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                            />
                            <Text
                                text="Mood Boards 1"
                                color="dark"
                                fontWeight="normal"
                                textSize="medium"
                            />
                        </div>
                    </div>
                    <div className="w-full m-small">
                        <Hr thickness="2" width="full" bgColor="grey" />
                        <Text
                            text="All Mood Boards"
                            color="dark"
                            fontWeight="normal"
                            textSize="large"
                        />
                    </div>
                    <div className="w-full h-full m-small  ">
                        {/* 1 pack of pict and description to picture  */}
                        <div className="flex flex-row">
                            <Image
                                height="12"
                                width=""
                                borderRadius="small"
                                url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                            />
                            <Text
                                text="Mood Boards"
                                color="dark"
                                fontWeight="normal"
                                textSize="medium"
                            />
                        </div>
                    </div>

                    {/* bottom block with button  */}
                    <div className="flex flex-col-reverse absolut bottom-0.5 m-small ">
                        <div>
                            <Hr thickness="2" width="full" bgColor="grey" />
                            <div className="flex items-center m-small">
                                <Button
                                    width="5"
                                    height="5"
                                    borderRadius="full"
                                    bgColor="light"
                                    color="primary"
                                    border="2"
                                    borderColor="primary"
                                    textSize="medium"
                                    notPlus={false}
                                />
                                <Text
                                    special="m-small"
                                    text="Create Mood Boards"
                                    color="dark"
                                    fontWeight="normal"
                                    textSize="large"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
