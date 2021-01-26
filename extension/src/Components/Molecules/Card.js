import React from 'react'

const Card = ({ url, action, filename }) => <img src={url} onClick={action} alt={filename} />

export default Card
