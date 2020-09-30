import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import Button from './Button'
import { useBasketContext } from './Basket'

const useStyles = createUseStyles((theme) => ({
  product: {
    backgroundColor: theme.colors.white,
    borderRadius: 4,
    flexBasis: `calc(100% - ${theme.spaces.lg})`,
    textAlign: 'center',
    margin: theme.spaces.md,
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    transitionProperty: 'max-height',
    transitionDuration: 250,
    overflow: 'hidden',
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      flexBasis: `calc(50% - ${theme.spaces.lg})`,
    },
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      flexBasis: `calc(33% - ${theme.spaces.lg})`,
    },
  },
  transitionIn: {
    maxHeight: 3000,
    transitionTimingFunction: 'ease-in',
  },
  transitionOut: {
    maxHeight: 450,
    transitionTimingFunction: 'ease-out',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spaces.md} ${theme.spaces.lg}`,
    '& > *': { marginBottom: theme.spaces.sm },
    '& > button': { marginTop: theme.spaces.md },
  },
  title: {
    color: theme.colors.raven,
    fontSize: theme.texts.md,
    fontWeight: 600,
  },
  price: {
    color: theme.colors.blue,
    fontSize: theme.texts.lg,
    fontWeight: 600,
  },
  image: {
    '& > img': { maxHeight: 175 },
  },
  synopsis: {
    fontSize: theme.texts.sm,
    '& > p': { color: theme.colors.raven, marginBottom: 0 },
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: theme.texts.md,
    },
  },
  readmore: {
    color: theme.colors.blue,
    fontSize: theme.texts.xs,
    fontWeight: 600,
    textTransform: 'uppercase',
    cursor: 'pointer',
  },
}))

function Product({ isbn, title, price, cover, synopsis }) {
  const classes = useStyles()
  const [content, setContent] = useState('')
  const [readMore, setReadMore] = useState(false)
  const [, dispatch] = useBasketContext()

  const makeContent = useCallback(
    () => setContent(synopsis.reduce((acc, val) => acc + val)),
    [synopsis]
  )

  const getExcerpt = (str) => str.slice(0, 78) + '...'

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        isbn,
        title,
        price,
        cover,
        synopsis,
      },
    })
  }

  useEffect(() => {
    makeContent()
  }, [makeContent])

  return (
    <div
      className={`${classes.product} ${
        readMore ? classes.transitionIn : classes.transitionOut
      }`}
    >
      <div className={classes.wrapper}>
        <span className={classes.title}>{title}</span>
        <span className={classes.price}>&euro;{price}</span>
        <div className={classes.image}>
          <img src={cover} alt={`couverture du livre: "${title}"`} />
        </div>
        <div className={classes.synopsis}>
          <p>{readMore ? content : getExcerpt(content)}</p>
          <span
            className={classes.readmore}
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'Lire moins' : 'Lire plus'}
          </span>
        </div>
        <Button model="add" cb={addToBasket}>
          Ajouter au panier
        </Button>
      </div>
    </div>
  )
}

Product.prototype = {
  isbn: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  cover: PropTypes.string,
  synopsis: PropTypes.arrayOf(PropTypes.string),
}

export default Product
