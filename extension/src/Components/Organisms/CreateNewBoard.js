import React, { useState, useContext } from 'react'
import { Context } from '../../Context/Context'

import Text from '../Atoms/Text'
import Hr from '../Atoms/Hr'
import Button from '../Atoms/Button'
import Image from '../Atoms/Image'
import Input from '../Atoms/Input'
import NewBoard from '../Molecules/NewBoard'

const CreateNewBoard = ({ action }) => {
    const context = useContext(Context)
    const [input, setInput] = useState('')
    const [error, setError] = useState(false)

    const handleOnChange = (e) => {
        setError(false)
        e.preventDefault()
        if (e.target.id === 'newBoardName') {
            console.log(e)
            setInput(e.target.value)
            console.log(context.newBoard)
        }
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        try {
            fetch('http://localhost:4000/profiles/albums', {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'x-auth-token': context.token,
                }),
                body: JSON.stringify({
                    album_name: input,
                }),
            }).then(() => {
                context.setNewBoard(input)
                action()
            })
        } catch {
            setError(true)
        }
    }

    return (
        <div className="h-full w-full flex flex-column relative items-center justify-around ">
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
                </div>
                {/* container with search bars  */}
                <form
                    className="m-small"
                    onChange={handleOnChange}
                    onSubmit={handleOnSubmit}
                >
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
                            id="newBoardName"
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
                            text="This is an idea, but it is not working"
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
                </form>
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
                            action={action}
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
                            action={handleOnSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNewBoard
