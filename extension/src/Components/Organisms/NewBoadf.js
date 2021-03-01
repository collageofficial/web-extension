import { React, useContext } from 'react'
import { Context } from '../../Context/Context'

import Text from '../Atoms/Text'
import Button from '../Atoms/Button'

const NewBoard = () => {
    const context = useContext(Context)

    return (
        <div className="w-96 h-14 flex flex-row justify-center items-center bg-white space-x-5 ">
            <Button
                width="5"
                height="5"
                borderRadius="full"
                bgColor="primary"
                color="light"
                textSize="medium"
                notPlus={false}
            />
            <Text
                text="Create Mood Board"
                color="dark"
                fontWeight="normal"
                textSize="medium"
            />
        </div>
    )
}

export default NewBoard