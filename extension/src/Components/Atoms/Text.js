import React from 'react'

const Text = ({ text, bgColor, color }) => (
  <p className={`bg-${bgColor} text-${color}`}>{text}</p>
)

export default Text
