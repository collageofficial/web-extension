import React from 'react'
import './Card.css'

const Card = ({ title, url, text, alt }) => (
    <div className="cardContainer">
        <p type="title">{title}</p>
        <img src={url} alt={alt}></img>
        <p type="text">{text}</p>
    </div>
)

export default Card
