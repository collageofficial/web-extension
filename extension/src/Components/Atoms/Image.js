import React from 'react'

const Image = ({
    height,
    width,
    borderRadius,
    special,
    url,
    filename,
    action,
    cursor,
}) => (
    <img
        className={`
            ${special}
            h-${height}
            w-${width}
            rounded-${borderRadius}
            ${cursor}
        `}
        src={url}
        alt={filename}
        onClick={() => action()}
    />
)

export default Image

//standard image

/* <Image
height=""
width=""
borderRadius="small"
url='https://i.pinimg.com/originals/18/70/90/1870902fae654106f55f581624a64c1b.jpg' 
/>  */
