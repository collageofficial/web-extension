import React from 'react'
import { TiPlus } from 'react-icons/ti'
import Text from '../Atoms/Text'

const HoverText = ({ action }) => (
    <div className="flex gap-2 items-center text-large" onClick={action}>
        <TiPlus />
        <Text
            text="Create a Mood Board"
            color="dark"
            fontWeight="bold"
            textSize="large"
        />
    </div>
)

export default HoverText
