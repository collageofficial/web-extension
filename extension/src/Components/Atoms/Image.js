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