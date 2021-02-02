import React from 'react'

const Card = ({ url, action, filename, index }) => (
    <img src={url} onClick={() => action(index)} alt={filename} />
)

export default Card
