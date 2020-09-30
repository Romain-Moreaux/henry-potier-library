import React from 'react'
import { createUseStyles } from 'react-jss'
import CurrencyFormat from 'react-currency-format'
import Button from './Button'
import { useBasketContext } from './Basket'
import { getBasketTotal } from './Basket'

const useStyles = createUseStyles((theme) => ({
  subtotal: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 300,
    padding: theme.spaces.md,

    backgroundColor: '#fff',
    border: `1px solid ${theme.colors.grey}`,
    borderRadius: 4,
    '& p': { color: theme.colors.raven },
  },
  total: {
    marginLeft: theme.spaces.md,
    fontWeight: 600,
  },
  gift: { display: 'flex', alignItems: 'center' },
}))

function SubTotal() {
  const classes = useStyles()
  const [{ basket }] = useBasketContext()
  return (
    <div className={classes.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong className={classes.total}>{value}</strong>
            </p>
            <small className={classes.gift}>
              <input type="checkbox" />
              this order contain a gift
            </small>
            <Button model="secondary">Procced to checkout</Button>
          </>
        )}
        decialScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'€'}
      />
    </div>
  )
}

export default SubTotal
