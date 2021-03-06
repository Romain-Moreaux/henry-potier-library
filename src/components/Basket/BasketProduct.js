import React from 'react'
import { createUseStyles } from 'react-jss'
import Button from '../Button'
import { useBasketContext } from './BasketProvider'

const useStyles = createUseStyles((theme) => ({
  basket: {
    display: 'flex',
  },
  cover: {
    '& > img': {
      objectFit: 'cover',
      maxHeight: 150,
    },
  },
  informations: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingLeft: theme.spaces.lg,
  },
  title: {
    fontSize: theme.texts.md,
    fontWeight: 600,
    color: theme.colors.raven,
    marginBottom: theme.spaces.md,
  },
  price: {
    fontSize: theme.texts.lg,
    fontWeight: 800,
    color: theme.colors.blue,
    marginBottom: theme.spaces.md,
  },
}))

export function BasketProduct({ id, title, price, cover }) {
  const classes = useStyles()
  const [, dispatch] = useBasketContext()
  const handleRemove = () => dispatch({ type: 'REMOVE_FROM_BASKET', id })
  return (
    <div className={classes.basket}>
      <div className={classes.cover}>
        <img src={cover} alt={`couverture du livre: "${title}"`} />
      </div>
      <div className={classes.informations}>
        <span className={classes.title}>{title}</span>
        <span className={classes.price}>€{price}</span>
        <Button model="primary" cb={handleRemove}>
          Retirer du panier
        </Button>
      </div>
    </div>
  )
}

export default BasketProduct
