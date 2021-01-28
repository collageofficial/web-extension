import { react, useContext, useState } from 'react'
import { Context } from '../../Context/Context'

import Text from '../Atoms/Text'
import Button from '../Atoms/Button'
import Image from '../Atoms/Image'

const BoardHovered = () => {
    const context = useContext(Context)

    let [displayButton, setDisplay] = useState(['bg-light', 'hidden'])

    return (
        <div
            className={`w-1/4 h-16 flex flex-row items-center justify-between ${displayButton[0]} border-2 p-small`}
            onMouseEnter={() => setDisplay(['bg-grey', 'visible'])}
            onMouseLeave={() => setDisplay(['bg-light', 'hidden'])}
        >
            <div className=" flex items-center h-full space-x-5">
                <Image
                    height="full"
                    width="auto"
                    borderRadius="small"
                    url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                />

                <Text
                    text="My mood board"
                    color="dark"
                    fontWeight="bold"
                    textSize="small"
                />
            </div>
            <div className={displayButton[1]}>
                <Button
                    text="Add to the board"
                    color="light"
                    textSize="medium"
                    textWeight="normal"
                    bgColor="primary"
                    width="25"
                    height="10"
                    border="2"
                    borderColor="primary"
                    borderRadius="small"
                />
            </div>
        </div>
    )
}

export default BoardHovered
