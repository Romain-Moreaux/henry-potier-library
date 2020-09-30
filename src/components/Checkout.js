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
  },
  shopCart: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.colors.white,
    margin: `${theme.spaces.lg} 0`,
    padding: `${theme.spaces.lg}`,
    border: `1px solid ${theme.colors.grey}`,
    borderRadius: 4,
  },
  boxLeft: { flex: 1 },
  boxRight: { flex: 1 },
  ad: {
    width: '100%',
    backgroundColor: theme.colors.white,
    padding: `${theme.spaces.md} ${theme.spaces.sm}`,
    textAlign: 'center',
  },
  title: {
    paddingBottom: theme.spaces.md,
    marginBottom: theme.spaces.lg,
    borderBottom: `1px solid ${theme.colors.grey}`,
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
              <Button model="cta">En savoir plus :)</Button>
            </div>
            <div className={classes.basket}>
              <h2 className={classes.title}>Your Shopping Basket</h2>
              <div className={classes.productList}>
                {basket?.map((item, i) => (
                  <BasketProduct key={i} {...item} />
                ))}
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
