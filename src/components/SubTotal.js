import React, { useEffect } from 'react'
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
    '& p': { color: theme.colors.raven },
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      borderRadius: 4,
      position: 'sticky',
      top: 40,
    },
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

  const [{ data, isLoading, isError }, doFetch] = useFetchApi()

  useEffect(() => {
    if (basket.length)
      doFetch(
        `http://henri-potier.xebia.fr/books/${getCommercialOffers(
          basket
        )}/commercialOffers`
      )
  }, [basket, doFetch])

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
                Sous-total ({basket?.length}
                {basket.length <= 1 ? 'article' : 'articles'}):
                <strong className={classes.total}>{value}</strong>
              </p>
              <small className={classes.gift}>
                <input type="checkbox" />
                commande contenant cadeau.
              </small>
              <Button model="primary">Passer la commande</Button>
            </>
          )}
          decialScale={2}
          value={getTotalwithBestOffer(data?.offers, getBasketTotal(basket))}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'€'}
        />
      )}
    </div>
  )
}

export default SubTotal
