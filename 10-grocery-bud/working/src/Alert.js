import React, { useEffect } from 'react'

const Alert = ({type}) => {
  const alertType = type==="add" ? "alert-success" : type==="delete" ? "alert-danger" : "false"
  const alertClass = `alert ${alertType}`
  const content =  type==="add" ? "item added to the list" : type==="delete" ? "item removed" : null
  return <p className={alertClass}>
    {content}
  </p>
}

export default Alert
