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
import ModalSelectImage from './Components/Organisms/ModalSelectImage'

// Pages
import Login from './Components/Pages/Login'

const App = () => {
    const context = useContext(Context)

    return (
        <div className="w-screen h-screen static flex justify-center items-center">
            {context.loginPage && <Login />}
            {context.plusBtn && (
                <div
                    className={`absolute bottom-10 right-5 flex gap-8 p-small cursor-pointer ${context.plusBtnHovered &&
                        'border-grey border-2 rounded-full'
                        }`}
                    onMouseEnter={context.plusBtnHoverToggle}
                    onMouseLeave={context.plusBtnHoverToggle}
                >
                    {context.plusBtnHovered && (
                        <HoverText action={context.modalOpenToggle} />
                    )}
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
            )}
            {context.modalOpen &&
                <div className="flex flex-wrap p-small gap-2 w-full h-full justify-center items-center overflow-y-auto">
                    {context.saveImage.length === 0
                        ? <ModalInsertImage />
                        : context.saveImage.map((element, index) => <ModalInsertImage key={index} image={element} index={index} />)}
                </div>
            }
            {context.modalSelectOpen && (
                <ModalSelectImage />
            )}
        </div>
    )
}

export default App
