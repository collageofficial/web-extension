import { react, useContext } from 'react'
import { Context } from '../../Context/Context'

import Text from '../Atoms/Text'
import Image from '../Atoms/Image'
import SaveBox from '../Molecules/SaveBox'
import CardAdded from '../Molecules/CardAdded'

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

            <div className="p-small flex flex-wrap w-auto  h-full space-x-5 ">
                <div className="h-1/6 w-auto">
                    <CardAdded
                        height="full"
                        width="auto"
                        borderRadius="small"
                        url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                    />
                </div>
                <div className="h-1/6 w-auto">
                    <CardAdded
                        height="full"
                        width="auto"
                        borderRadius="small"
                        url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                    />
                </div>
                <div className="h-1/6 w-auto">
                    <CardAdded
                        height="full"
                        width="auto"
                        borderRadius="small"
                        url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                    />
                </div>
                <div className="h-1/6 w-auto">
                    <CardAdded
                        height="full"
                        width="auto"
                        borderRadius="small"
                        url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                    />
                </div>
                <div className="h-1/6 w-auto">
                    <CardAdded
                        height="full"
                        width="auto"
                        borderRadius="small"
                        url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                    />
                </div>
                <div className="h-1/6 w-auto">
                    <CardAdded
                        height="full"
                        width="auto"
                        borderRadius="small"
                        url="https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg"
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="fixed bottom-0 h-1/5 w-11/12 ">
                    <SaveBox />
                </div>
            </div>
        </div>
    )
}

export default ExtenActivated
