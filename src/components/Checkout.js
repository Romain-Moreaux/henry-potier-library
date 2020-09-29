import React from 'react'
import { createUseStyles } from 'react-jss'
import Header from './Header'

const useStyles = createUseStyles((theme) => ({
  checkout: {
    ...theme.displays.page,
  },
}))

function Checkout() {
  const classes = useStyles()
  return (
    <div className={classes.checkout}>
      <Header />
      <div>checkout</div>
    </div>
  )
}

export default Checkout
