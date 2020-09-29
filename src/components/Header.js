import React from 'react'
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
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: `0 ${theme.spaces.md}`,
    '& svg': {
      width: 24,
      height: 24,
      objectFit: 'contain',
    },
    '& > div': { marginRight: theme.spaces.md },
  },
  logo: {
    ...theme.displays.flexCenter,
    flexBasis: '100%',
    justifyContent: 'center',
    marginBottom: theme.spaces.sm,
    '& span': {
      fontSize: theme.texts.xl,
      fontWeight: 300,
      marginLeft: theme.spaces.md,
    },
  },
  searchBar: {
    padding: `0 ${theme.spaces.md}`,
    flex: 1,
    marginLeft: 'auto',
    '& > input': {
      height: 24,
      padding: `0 ${theme.spaces.sm}`,
      borderRadius: 4,
      border: 0,
      fontSize: theme.texts.md,
    },
  },
  menu: {
    display: 'flex',
    flex: 1,
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

function Header({ setValues }) {
  const classes = useStyles()
  const handleChange = (e) => setValues(e.target.value)

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
