import React from 'react'
import { createUseStyles } from 'react-jss'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Books } from '../assets/book.svg'
import { FiShoppingCart } from 'react-icons/fi'
import { FiShoppingBag } from 'react-icons/fi'
import { useBasketContext } from './Basket'

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
    justifyContent: 'center',
    textAlign: 'center',
    padding: `0 ${theme.spaces.md}`,
    '& svg': {
      width: 24,
      height: 24,
      objectFit: 'contain',
      [`@media (min-width: ${theme.breakpoints.md}px)`]: {
        width: 32,
        height: 32,
      },
    },
    '& .is-active': {
      ...theme.links.isActive,
    },
  },
  logo: {
    ...theme.displays.flexCenter,
    flexBasis: '100%',
    justifyContent: 'center',
    marginBottom: theme.spaces.sm,
    '& span': {
      fontSize: theme.texts.lg,
      fontWeight: 300,
      marginLeft: theme.spaces.md,
    },
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      flexBasis: 'auto',
      '& span': {
        fontSize: theme.texts.xxl,
      },
    },
  },
  searchBar: {
    padding: `0 ${theme.spaces.md}`,
    '& > input': {
      height: 24,
      padding: `0 ${theme.spaces.sm}`,
      borderRadius: 4,
      border: 0,
      fontSize: theme.texts.xs,
    },
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      marginLeft: 'auto',
      '& > input': {
        fontSize: theme.texts.sm,
      },
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
      fontSize: theme.texts.xs,
      margin: `0 ${theme.spaces.sm}`,
      textTransform: 'uppercase',
      [`@media (min-width: ${theme.breakpoints.md}px)`]: {
        fontSize: theme.texts.sm,
      },
    },
  },
}))

function Header({ setValues }) {
  const classes = useStyles()
  const [{ basket }] = useBasketContext()
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
            <NavLink exact to="/" activeClassName="is-active">
              <span>home</span>
              <FiShoppingBag />
            </NavLink>
            <NavLink to="/checkout" activeClassName="is-active">
              <span>Cart</span>
              {basket?.length}
              <FiShoppingCart />
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
