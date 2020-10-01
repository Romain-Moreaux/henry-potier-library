import React from 'react'
import { createUseStyles } from 'react-jss'
import { NavLink, useLocation } from 'react-router-dom'
import { ReactComponent as Books } from '../assets/book.svg'
import { FiShoppingCart } from 'react-icons/fi'
import { FiShoppingBag } from 'react-icons/fi'
import { useBasketContext } from './Basket'

const useStyles = createUseStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.blue,
    padding: `${theme.spaces.sm} 0`,
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
        width: 36,
        height: 36,
      },
    },
    '& .is-active': {
      ...theme.links.isActive,
    },
  },
  logo: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    marginBottom: theme.spaces.sm,
    '& span': {
      display: 'none',
      fontSize: theme.texts.lg,
      fontWeight: 300,
      marginLeft: theme.spaces.md,
      [`@media (min-width: ${theme.breakpoints.md}px)`]: {
        display: 'flex',
      },
    },
    '& > svg': { width: 48, height: 48 },
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      flex: 1,
      '& span': {
        fontSize: theme.texts.xl,
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
      position: 'relative',
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
  amount: {
    position: 'absolute',
    top: 12,
    right: -9,
    width: 19,
    height: 19,
    backgroundColor: theme.colors.yellow,
    color: theme.colors.blue,
    fontSize: theme.texts.xs,
    fontWeight: 600,
    border: `2px solid ${theme.colors.blue}`,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

function Header({ setValues }) {
  const classes = useStyles()
  const [{ basket }] = useBasketContext()
  const location = useLocation()
  const handleChange = (e) => setValues(e.target.value)

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.navigation}>
          <div className={classes.logo}>
            <Books /> <span>la bibliothèque d'Henri Potier</span>
          </div>
          {location.pathname === '/' && (
            <div className={classes.searchBar}>
              <input
                onChange={handleChange}
                type="text"
                placeholder="search by keyword..."
              />
            </div>
          )}
          <nav className={classes.menu}>
            <NavLink exact to="/" activeClassName="is-active">
              <span>Shop</span>
              <FiShoppingBag />
            </NavLink>
            <NavLink to="/checkout" activeClassName="is-active">
              <span>Cart</span>
              <span className={classes.amount}>{basket?.length}</span>
              <FiShoppingCart />
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
