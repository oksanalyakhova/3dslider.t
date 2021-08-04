import React, { createContext, useState, useEffect } from 'react'
import Alert from 'components/Alert'

const AlertContext = createContext()

export const AlertProvider = ({ children, location }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [open, setOpen] = useState(false)
  const [additionalContent, setAdditionalContent] = useState({
    title: '',
    body: '',
    cta: '',
    ctaFunction: () => {},
  })
  const [cap, setCap] = useState(825)

  useEffect(() => {
    if (location.pathname.includes('service')) {
      setAdditionalContent({
        ...additionalContent,
        ctaFunction: () => console.log('triggered from service page'),
      })
    }
  }, [location.pathname])

  const alertProps = {
    title,
    open,
    setOpen,
    cap,
    additionalContent,
  }

  return (
    <AlertContext.Provider
      value={{
        setTitle,
        setBody,
        setOpen,
        setCap,
        setAdditionalContent,
        additionalContent,
      }}
    >
      {children}
      <Alert {...alertProps}>{body}</Alert>
    </AlertContext.Provider>
  )
}

export default AlertContext
