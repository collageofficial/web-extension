import { react, useContext } from 'react'
import { Context } from '../../Context/Context'

import Text from '../Atoms/Text'
import Button from '../Atoms/Button'
import Image from '../Atoms/Image'
import Hr from '../Atoms/Hr'
import { FaDivide } from 'react-icons/fa'

const SaveBoard = () => {
    const context = useContext(Context)

    return (
        <div className="w-1/4 h-1/4 flex flex-col bg-light rounded-small border-2 border-dark justify-between">
            <div className="m-small">
                <Text
                    text="Saved to someboard"
                    color="dark"
                    fontWeight="normal"
                    textSize="large"
                />
            </div>
            <div>
                <Hr thickness="2" margin="small" width="9/10" bgColor="grey" />
            </div>
            <div className="h-2/5 ml-small flex justify-center item-center">
                <Image
                    height="full"
                    width="auto"
                    borderRadius="small"
                    url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                    action={() => {}}
                />
            </div>
            <div>
                <Hr thickness="2" margin="small" width="9/10" bgColor="grey" />
            </div>
            <div className="flex justify-end m-small">
                <Button
                    text="See it now"
                    color="light"
                    textSize="medium"
                    textWeight="normal"
                    bgColor="primary"
                    width="25"
                    height="8"
                    borderRadius="small"
                />
            </div>
        </div>
    )
}

export default SaveBoard
