import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Books } from '../assets/book.svg'
import { FiShoppingCart } from 'react-icons/fi'
import { FiShoppingBag } from 'react-icons/fi'

const useStyles = createUseStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.blue,
    padding: `${theme.spaces.lg} 0`,
    color: theme.colors.whiteAlt,
  },
  container: {
    ...theme.wrappers.w1280,
  },
  navigation: {
    ...theme.displays.flexCenter,
    padding: `0 ${theme.spaces.md}`,
    '& svg': {
      width: 48,
      height: 48,
      objectFit: 'contain',
    },
    '& > div': { marginRight: theme.spaces.md },
  },
  logo: {
    ...theme.displays.flexCenter,
    '& span': {
      fontSize: theme.texts.xxl,
      fontWeight: 300,
      marginLeft: theme.spaces.md,
    },
  },
  searchBar: {
    padding: `0 ${theme.spaces.md}`,
    marginLeft: 'auto',
    '& > input': {
      height: 48,
      padding: `0 ${theme.spaces.sm}`,
      borderRadius: 4,
      border: 0,
      fontSize: theme.texts.md,
    },
  },
  menu: {
    display: 'flex',
    padding: `0 ${theme.spaces.md}`,
    '& > a': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'inherit',
      margin: `0 ${theme.spaces.md}`,
      textTransform: 'uppercase',
    },
  },
}))

function Header() {
  const classes = useStyles()
  const [search, setSearch] = useState('')
  console.log('search', search)
  const handleChange = (e) => setSearch(e.target.value)

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.navigation}>
          <div className={classes.logo}>
            <Books /> <span>la bibliothèque d'Henri Potier</span>
          </div>
          <div className={classes.searchBar}>
            <input
              onChange={handleChange}
              type="text"
              placeholder="search by keyword..."
            />
          </div>
          <nav className={classes.menu}>
            <NavLink to="/">
              <span>home</span>
              <FiShoppingBag />
            </NavLink>
            <NavLink to="/checkout">
              <span>Cart</span>
              <FiShoppingCart />
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
