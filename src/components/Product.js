import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
  product: {
    backgroundColor: theme.colors.white,
    borderRadius: 4,
    flexBasis: `calc(50% - ${theme.spaces.lg})`,
    textAlign: 'center',
    margin: theme.spaces.md,
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spaces.md} ${theme.spaces.sm}`,
  },
  title: {
    fontSize: theme.texts.sm,
    fontWeight: 600,
  },
  price: {
    fontSize: theme.texts.sm,
    fontWeight: 600,
  },
  image: {
    '& > img': { height: 125 },
  },
  synopsis: {
    overflow: 'hidden',
    maxHeight: 40,
    fontSize: theme.texts.xs,
  },
}))

function Product({ isbn, title, price, cover, synopsis }) {
  const classes = useStyles()
  return (
    <div className={classes.product}>
      <div className={classes.wrapper}>
        <span className={classes.title}>{title}</span>
        <span className={classes.price}>&euro;{price}</span>
        <div className={classes.image}>
          <img src={cover} alt={`couverture du livre: "${title}"`} />
        </div>
        <div className={classes.synopsis}>
          {synopsis?.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
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
