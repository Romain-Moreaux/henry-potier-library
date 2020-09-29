import React from 'react'
import { createUseStyles } from 'react-jss'
import Header from './Header'

const useStyles = createUseStyles((theme) => ({
  homepage: {
    ...theme.displays.page,
  },
}))

function Homepage() {
  const classes = useStyles()
  return (
    <div className={classes.homepage}>
      <Header />
      <div>Homepage</div>
    </div>
  )
}

export default Homepage
