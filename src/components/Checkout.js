import React from 'react'
import { createUseStyles } from 'react-jss'
import BasketProduct, { useBasketContext } from './Basket'
import Button from './Button'
import Header from './Header'
import SubTotal from './SubTotal'

const useStyles = createUseStyles((theme) => ({
  checkout: {
    ...theme.displays.page,
  },
  container: {
    ...theme.wrappers.w1280,
    width: '100%',
  },
  shopCart: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.colors.white,
    margin: `0 0 ${theme.spaces.lg}`,
    padding: `0 ${theme.spaces.lg} ${theme.spaces.xxl}`,
    marginBottom: theme.spaces.xxl,
    border: `1px solid ${theme.colors.grey}`,
    borderRadius: 4,
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      padding: `${theme.spaces.lg} ${theme.spaces.xxl}`,
    },
  },
  boxLeft: {
    flexBasis: '100%',
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      flex: 1,
      marginRight: theme.spaces.xxl,
    },
  },
  boxRight: {
    flex: 1,
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      position: 'relative',
    },
  },
  title: {
    paddingBottom: theme.spaces.md,
    marginBottom: theme.spaces.lg,
    borderBottom: `1px solid ${theme.colors.grey}`,
  },
  ad: {
    background: `linear-gradient(to right bottom, ${theme.colors.yellow}, ${theme.colors.yellowAlt1}, ${theme.colors.yellowAlt2}) left top no-repeat`,
    padding: `${theme.spaces.md} ${theme.spaces.sm}`,
    margin: `0 -${theme.spaces.lg}`,
    display: 'flex',
    justifyContent: 'space-evenly',
    '& > button': {
      marginLeft: theme.spaces.md,
      fontSize: theme.texts.xs,
    },
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      margin: 0,
    },
  },
  texts: {
    color: theme.colors.whiteAlt,
    fontSize: theme.texts.sm,
  },
  strong: {
    display: 'flex',
    fontSize: theme.texts.sm,
    color: theme.colors.blue,
    fontWeight: 800,
  },
  basket: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spaces.lg,
  },
  productList: {
    padding: `${theme.spaces.lg} 0`,
    display: 'flex',
    flexDirection: 'column',
    '& > div': { marginBottom: theme.spaces.md },
  },
}))

function Checkout() {
  const classes = useStyles()
  const [{ basket }] = useBasketContext()

  return (
    <div className={classes.checkout}>
      <Header />
      <div className={classes.container}>
        <div className={classes.shopCart}>
          <div className={classes.boxLeft}>
            <div className={classes.ad}>
              <div className={classes.texts}>
                <span>Offre exclusive aux membres</span>
                <span className={classes.strong}>
                  Publicis Sapient Engineering
                </span>
              </div>
              <Button model="secondary" cb={() => alert('love you guys :)')}>
                En savoir plus
              </Button>
            </div>
            <div className={classes.basket}>
              <h2 className={classes.title}>votre panier de course.</h2>
              <div className={classes.productList}>
                {basket?.length ? (
                  basket.map((item, i) => <BasketProduct key={i} {...item} />)
                ) : (
                  <p>Votre panier est vide pour le moment.</p>
                )}
              </div>
            </div>
          </div>
          <div className={classes.boxRight}>
            <SubTotal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
