import { react, useContext } from 'react'
import { Context } from '../../Context/Context'

import Text from '../Atoms/Text'
import Button from '../Atoms/Button'
import Image from '../Atoms/Image'

const SaveBox = () => {
    const context = useContext(Context)

    return (
        <div className="w-9/10 h-1/5 flex flex-col bg-light rounded-small border-2 border-dark justify-between">
            <div className="m-small">
                <Text
                    text="Added images :"
                    color="primary"
                    fontWeight="normal"
                    textSize="medium"
                />
            </div>
            {/* remenber to write some logic with ratio for fit image  */}
            <div className="h-2/5 ml-small">
                <Image
                    height="full"
                    width="auto"
                    borderRadius="small"
                    url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                />
            </div>
            <div className="flex justify-end m-small">
                <Button
                    text="Save in Mood boards"
                    color="light"
                    textSize="medium"
                    textWeight="normal"
                    bgColor="primary"
                    width="20"
                    height="10"
                    border="2"
                    borderColor="primary"
                    borderRadius="small"
                />
            </div>
        </div>
    )
}

export default SaveBox
