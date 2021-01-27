import { react, useContext } from 'react'
import { Context } from '../../Context/Context'

import Text from '../Atoms/Text'
import { RiDragDropLine } from 'react-icons/ri'

const DragDrop = () => {
    const context = useContext(Context)

    return (
        <div className="w-3/6 h-full flex flex-col items-center bg-grey rounded-small">
            <div className="w-full h-4/5 flex flex-col justify-end items-center">
                <RiDragDropLine className="w-16 h-16" />
                </div>
               <div className="mt-6">
                <Text
                    text="Drag & drop or click to upload"
                    color="dark"
                    fontWeight="bold"
                    textSize="medium"
                />
                </div>
            
             <div className=" w-full h-full flex flex-col justify-end items-center mb-8">
            <Text
                text="Recommendation: use files smaller or bigger"
                color="dark"
                fontWeight="normal"
                textSize="small"
            />
            <Text
                text="that size with high quality"
                color="dark"
                fontWeight="normal"
                textSize="small"
            />
            </div>
        </div>
    )
}

export default DragDrop
