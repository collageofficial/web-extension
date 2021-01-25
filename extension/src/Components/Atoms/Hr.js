import React from 'react'

const Hr = ({
    width,
    margin,
    bgColor,
    thickness
}) => (
    <hr
    className={`
    w-${width}
    m-${margin}
    bg-${bgColor}
    border-${thickness}
    `}
    />
)

export default Hr


{/* <Hr
thickness='2'
margin="small"
width="100"
bgColor="grey"
/> */}