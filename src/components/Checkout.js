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
    margin: `0 0 ${theme.spaces.lg}`,
    padding: `0 ${theme.spaces.lg} ${theme.spaces.lg}`,
    border: `1px solid ${theme.colors.grey}`,
    borderRadius: 4,
  },
  boxLeft: {
    flexBasis: '100%',
  },
  boxRight: { flex: 1 },
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
    '& > button': {
      flex: 1,
      marginLeft: theme.spaces.md,
    },
  },
  texts: {
    color: theme.colors.whiteAlt,
    fontSize: theme.texts.md,
  },
  strong: {
    display: 'flex',
    fontSize: theme.texts.md,
    color: theme.colors.blue,
    fontWeight: 600,
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
              <Button model="secondary">En savoir plus :)</Button>
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
