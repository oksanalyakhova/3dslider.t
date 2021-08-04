import React, { createContext, useState } from 'react'
import i18n from '../../config/i18n'
import { useSessionStorage } from 'react-use'

const LocaleContext = createContext()

export const LocaleProvider = ({ children, locale }) => {
  const [selectedLocale, setSelectedLocale] = useSessionStorage(
    'language',
    Object.values(i18n).find((lang) => lang.default).locale
  )
  const [localePageContext, setLocalePageContext] = useState(null)

  return (
    <LocaleContext.Provider
      value={{
        locale,
        i18n,
        setSelectedLocale,
        selectedLocale,
        setLocalePageContext,
        localePageContext,
      }}
    >
      {children}
    </LocaleContext.Provider>
  )
}

export default LocaleContext
