import React, { useEffect } from 'react'

const Alert = ({type}) => {
  let alertType, content = ""

  switch (type) {
    case "add":
      alertType = "alert-success"
      content = "item added to the list"
      break
    case "delete":
      alertType = "alert-danger"
      content = "item removed"
      break
    case "edit":
      alertType = "alert-success"
      content = "item changed"
      break
    default:
      return
  }

  const alertClass = `alert ${alertType}`
  return <p className={alertClass}>
    {content}
  </p>
}

export default Alert
