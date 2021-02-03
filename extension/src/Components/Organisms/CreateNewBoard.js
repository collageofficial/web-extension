import React, { useEffect, useContext } from 'react'
import { Context } from '../../Context/Context'

import Text from '../Atoms/Text'
import Hr from '../Atoms/Hr'
import Button from '../Atoms/Button'
import Image from '../Atoms/Image'
import Input from '../Atoms/Input'
import NewBoard from '../Molecules/NewBoard'

const CreateNewBoard = () => {
    const context = useContext(Context)

    return (
        <div className="h-1/2 w-3/4 flex flex-column relative content-around ">
            {/* upper container with img & boards  */}
            <div className="flex flex-column ">
                {/* container with image  */}
                <div className=" w-5/12 m-small h-max">
                    <Image
                        height="96"
                        width=""
                        borderRadius="small"
                        url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                    />
                </div >
                {/* container with search bars  */}
                <div className="m-small">
                    <Text
                        text="Create Board"
                        color="dark"
                        fontWeight="normal"
                        textSize="large"
                    />
                    {/* input name  */}
                    <div className="m-small">
                        <Text
                            special="m-small"
                            text="Name"
                            color="dark"
                            fontWeight="normal"
                            textSize="medium"
                        />
                        <Input
                            text="E.g. “Places to go” or “Recipes to make”"
                            textWeight="200"
                            bgColor="light"
                            width="96"
                            height="14"
                            border="2"
                            borderColor="grey"
                            borderRadius="small"
                        />
                    </div>
                    {/* container with search input  */}
                    <div className="m-small">
                        <Text
                            special="m-small"
                            text="Add collaborators (optional)"
                            color="dark"
                            fontWeight="normal"
                            textSize="medium"
                        />
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
                </div>
            </div>

            {/* lower container with buttons on bottom  */}
            <div className="w-full flex flex-col absolute bottom-0 m-small">
            <Hr thickness="2" width="full" bgColor="grey" />
            
            <div className="w-full flex flex-row justify-end  bottom-0 m-small">
                <div className="flex justify-start w-1/2 m-small">
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
                    />
                </div>
                <div className="flex justify-end w-1/2 m-small">
                    <Button 
                        special=""
                        text="Create"
                        color="light"
                        textSize="medium"
                        textWeight="normal"
                        bgColor="primary"
                        width="20"
                        height="10"
                        borderRadius="small"
                    />
                </div>
            </div>
            </div>
        </div>
    )
}

export default CreateNewBoard
