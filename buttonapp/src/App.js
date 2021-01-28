import React, { useContext, useState } from 'react'
import { Context } from './Context/Context'

import './tailwind.css'

// Atoms
import Button from './Components/Atoms/Button'
import Text from './Components/Atoms/Text'

// Molecules
import HoverText from './Components/Molecules/HoverText'

// Organism
import ModalInsertImage from './Components/Organisms/ModalInsertImage'
const App = () => {
    const context = useContext(Context)

    const [plusBtnHovered, setPlusBtnIsHovered] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const plusBtnHoverToggle = () => setPlusBtnIsHovered(!plusBtnHovered)
    const modalOpenToggle = () => setModalOpen(true)

    return (
        <div className="w-screen h-screen static flex justify-center items-center">
            <div
                className={`absolute bottom-10 right-5 flex gap-8 p-small cursor-pointer ${
                    plusBtnHovered && 'border-grey border-2 rounded-full'
                }`}
                onMouseEnter={plusBtnHoverToggle}
                onMouseLeave={plusBtnHoverToggle}
            >
                {plusBtnHovered && <HoverText action={modalOpenToggle} />}
                <Button
                    width="8"
                    height="8"
                    borderRadius="full"
                    bgColor="primary"
                    color="light"
                    textSize="large"
                    notPlus={false}
                />
            </div>
            {modalOpen && <ModalInsertImage />}
            
        </div>
    )
}

export default App
