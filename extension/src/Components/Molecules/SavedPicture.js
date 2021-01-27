import { react, useContext } from 'react'
import { Context } from '../../Context/Context'

import Text from '../Atoms/Text'
import Hr from '../Atoms/Hr'
import Button from '../Atoms/Button'
import Image from '../Atoms/Image'

const SavedPicture = () => {
    const context = useContext(Context)

    return (
        <div className="w-96 h-96 flex flex-col items-center relative border-2 border-grey rounded-small">
            <div className="m-small top-0 left-0 ">
                <Text
                    text="Saved to $board :"
                    color="primary"
                    fontWeight="normal"
                    textSize="medium"
                />
            </div>
            <div className="items-center w-full">
                <Hr thickness="1" margin="small" width="auto" bgColor="grey" />
            </div>
            <div className="flex border-rounded-small h-56 items-center ">
                <Image
                    special=""
                    height="48"
                    width="auto"
                    borderRadius="small"
                    url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                />
            </div>
            <div className="items-center w-full">
                <Hr thickness="1" margin="small" width="auto" bgColor="grey" />
            </div>
                <Button
                    special="absolute bottom-0 right-0 m-2  "
                    text="See it now"
                    color="light"
                    textSize="medium"
                    textWeight="normal"
                    bgColor="primary"
                    width="24"
                    height="10"
                    borderRadius="small"
                />
        </div>
    )
}

export default SavedPicture
