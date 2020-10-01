import React from 'react'
import { createUseStyles } from 'react-jss'
import CurrencyFormat from 'react-currency-format'
import Button from './Button'
import {
  getBasketTotal,
  getCommercialOffers,
  useBasketContext,
  getTotalwithBestOffer,
} from './Basket'
import useFetchApi from './useFetch'

const useStyles = createUseStyles((theme) => ({
  subtotal: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spaces.md,

    backgroundColor: theme.colors.grey,
    border: `1px solid ${theme.colors.grey}`,
    borderRadius: 4,
    '& p': { color: theme.colors.raven },
  },
  total: {
    marginLeft: theme.spaces.md,
    fontWeight: 600,
  },
  gift: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spaces.md,
  },
}))

function SubTotal() {
  const classes = useStyles()
  const [{ basket }] = useBasketContext()

  let isError,
    isLoading = false
  let offers = [
    {
      type: 'percentage',
      value: 5,
    },
    {
      type: 'minus',
      value: 15,
    },
    {
      type: 'slice',
      sliceValue: 100,
      value: 12,
    },
  ]

  // const [{ data, isLoading, isError }] = useFetchApi(
  //   `http://henri-potier.xebia.fr/books/${getCommercialOffers(
  //     basket
  //   )}/commercialOffers`,
  //   []
  // )

  return (
    <div className={classes.subtotal}>
      {isError && (
        <p className={classes.statusIndicator}>
          Une erreur est survenue, veuillez rafraîchir votre page...
        </p>
      )}
      {isLoading ? (
        <p className={classes.statusIndicator}>Ressources en chargement</p>
      ) : (
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
              <Button model="primary">Procced to checkout</Button>
            </>
          )}
          decialScale={2}
          value={getTotalwithBestOffer(offers, getBasketTotal(basket))}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'€'}
        />
      )}
    </div>
  )
}

export default SubTotal
