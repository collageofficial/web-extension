import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Input = ({
    text,
    noGlass,
    textWeight,
    bgColor,
    width,
    height,
    border,
    borderColor,
    borderRadius,
    type,
    id
}) => (
    <div
        className={`
            flex
            p-small
            bg-${bgColor}
            w-${width}
            h-${height}
            border-${border}
            border-${borderColor}
            rounded-${borderRadius}
            focus: outline-none
            active: outline-none
        `}
    >
        <input
            placeholder={text}
            className={`
                font-main
                font-${textWeight} 
                text-left
                align-middle
                w-full
                h-full
                bg-${bgColor}
                p-small
                focus: outline-none
                active: outline-none
            `}
            type={type}
            id={id}
            required
        />
        { noGlass === false && (
            <button>
                <FaSearch />
            </button>
        )}
    </div>
)

export default Input

// Input standard
{/* <Input
    text="E.g. “Places to go” or “Recipes to make”"
    textWeight="200"
    bgColor="light"
    width="96"
    height="14"
    border="2"
    borderColor="grey"
    borderRadius="small"
/> */}

// Input with magnifying glass
{/* <Input
    text="Search"
    noGlass={false}
    textWeight="200"
    bgColor="light"
    width="96"
    height="14"
    border="2"
    borderColor="grey"
    borderRadius="small"
/> */}
