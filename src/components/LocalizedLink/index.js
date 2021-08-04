import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby';
import LocaleContext from 'context/LocaleProvider';
import locales from '../../../config/i18n'

const LocalizedLink = ({ to, ...props }, ref) => {

  const { locale } = React.useContext(LocaleContext)
  const isIndex = to === '/'
  const path = locales[locale].default ? to : `${locales[locale].path}${isIndex ? '' : `${to}`}`
  
  return <Link ref={ref} {...props} to={locales[locale].default ? path : `/${path}`} />
}

export default React.forwardRef(LocalizedLink);

LocalizedLink.propTypes = {
  to: PropTypes.string.isRequired,
}
