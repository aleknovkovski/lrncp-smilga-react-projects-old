import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'
async function copyToClipboard(color) {
    try {
        await navigator.clipboard.writeText(color);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

const SingleColor = ({color: {type, weight, rgb}}) => {
    const bgColor = {backgroundColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`}
    const colorClass = `color ${type==="shade" ? "color-light" : false }`
    return (
      <article className={colorClass} style={bgColor} onClick={()=> copyToClipboard("copied text")}>
          <p className="percent-value">{weight}%</p>
          <p className="color-value">{rgbToHex(rgb[0], rgb[1], rgb[2])}</p>
      </article>
  )
}

export default SingleColor
