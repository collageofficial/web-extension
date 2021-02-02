import { react, useContext } from 'react'
import { Context } from '../../Context/Context'

import Text from '../Atoms/Text'
import Image from '../Atoms/Image'
import SaveBox from '../Molecules/SaveBox'

const ExtenActivated = () => {
    const context = useContext(Context)

    return (
        <div>
            <div className="flex flex-row m-small space-x-5">
                <img src="icon.png" alt="logo"></img>
                <Text
                    text="Add one more images to your Mood Boards"
                    color="primary"
                    fontWeight="normal"
                    textSize="large"
                />
            </div>
            <div className="h-1/5 ml-small flex flex-row space-x-5">
                <Image
                    height="full"
                    width="auto"
                    borderRadius="small"
                    url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                />
                <Image
                    height="full"
                    width="auto"
                    borderRadius="small"
                    url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                />
                <Image
                    height="full"
                    width="auto"
                    borderRadius="small"
                    url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                />
                <Image
                    height="full"
                    width="auto"
                    borderRadius="small"
                    url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                />
                <Image
                    height="full"
                    width="auto"
                    borderRadius="small"
                    url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                />
                <Image
                    height="full"
                    width="auto"
                    borderRadius="small"
                    url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                />
                <Image
                    height="full"
                    width="auto"
                    borderRadius="small"
                    url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                />
                <Image
                    height="full"
                    width="auto"
                    borderRadius="small"
                    url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                />
                <Image
                    height="full"
                    width="auto"
                    borderRadius="small"
                    url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                />
                <Image
                    height="full"
                    width="auto"
                    borderRadius="small"
                    url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                />
                <Image
                    height="full"
                    width="auto"
                    borderRadius="small"
                    url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                />
                <Image
                    height="full"
                    width="auto"
                    borderRadius="small"
                    url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                />
            </div>
               <div>
            <SaveBox />
            </div>
        </div>
    )
}

export default ExtenActivated
