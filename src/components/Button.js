import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import PropTypes from 'prop-types'

const useStyles = createUseStyles((theme) => ({
  button: {
    ...theme.buttons.prototype,
  },
}))

const Button = ({ children, cb, model }) => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <button
      style={{ ...theme.buttons[model] }}
      className={classes.button}
      onClick={cb}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  model: 'default',
}

Button.propTypes = {
  model: PropTypes.oneOf(['add', 'remove', 'submit', 'offer']),
  cb: PropTypes.func,
  children: PropTypes.node,
}

export default Button
