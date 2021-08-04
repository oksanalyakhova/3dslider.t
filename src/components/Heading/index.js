import React from 'react'
import PropTypes from 'prop-types'
import { Content } from './styles'
import Typography from 'components/UI/Typography'
import Link from 'components/UI/Link'
import Button from 'components/UI/Button'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Heading = ({
  cap = 650,
  overline,
  title,
  body,
  parentPage,
  ctaText,
  internalLink: handle,
  externalLink,
  color,
  linkTheme,
  buttonStyleCta,
  buttonTheme,
}) => {
  const route = externalLink
    ? externalLink
    : parentPage?.handle
    ? `/${parentPage?.handle}/${handle}`
    : `/${handle}`

  return (
    <Content color={color} cap={cap}>
      {overline ? (
        <Typography elementTheme="overline">{overline}</Typography>
      ) : (
        <></>
      )}
      {title || title?.raw ? (
        <Typography elementTheme="h2 semi-bold">
          {title?.raw
            ? documentToReactComponents(JSON.parse(title?.raw))
            : title}
        </Typography>
      ) : (
        <></>
      )}
      {body || body?.body ? (
        <Typography>{body?.body ? body?.body : body}</Typography>
      ) : (
        <></>
      )}
      {ctaText && buttonStyleCta ? (
        <Button theme={buttonTheme ? buttonTheme : 'primary'} to={route}>
          {ctaText}
        </Button>
      ) : ctaText ? (
        <Link
          to={route}
          target={externalLink ? '_blank' : ''}
          theme={linkTheme ? linkTheme : 'primary'}
        >
          {ctaText}
        </Link>
      ) : (
        <></>
      )}
    </Content>
  )
}

Heading.propTypes = {
  cap: PropTypes.number,
  overline: PropTypes.string,
  title: PropTypes.any,
  body: PropTypes.string,
  ctaText: PropTypes.string,
  handle: PropTypes.string,
  externalLink: PropTypes.string,
}

export default Heading
