import React from 'react'
import { createUseStyles } from 'react-jss'
import Button from './Button'
import Header from './Header'
import SubTotal from './SubTotal'

const useStyles = createUseStyles((theme) => ({
  checkout: {
    ...theme.displays.page,
  },
  container: {
    ...theme.wrappers.w1280,
  },
  shopCart: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  boxLeft: { flex: 1 },
  boxRight: { flex: 1 },
  ad: {
    width: '100%',
    backgroundColor: theme.colors.white,
    padding: `${theme.spaces.md} ${theme.spaces.sm}`,
    textAlign: 'center',
  },
  texts: {
    color: theme.colors.raven,
    fontSize: theme.texts.md,
  },
  strong: {
    fontSize: theme.texts.lg,
    color: theme.colors.cyan,
    fontWeight: 600,
    marginLeft: theme.spaces.md,
  },
  basket: {
    displays: 'flex',
    flexDirection: 'column',
  },
  productList: {},
}))

function Checkout() {
  const classes = useStyles()
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
              <Button model="offer">En savoir plus :)</Button>
            </div>
            <div className={classes.basket}>
              <h2>Your Shopping Basket</h2>
              <div className={classes.productList}>
                products products products products
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
