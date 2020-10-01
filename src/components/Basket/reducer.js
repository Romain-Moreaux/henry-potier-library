import books from '../../assets/books.json'

export const initialState = {
  // basket: [],
  basket: [books[0], books[1], books[2]],
}

export const getBasketTotal = (basket) =>
  basket?.reduce((acc, item) => acc + item.price, 0)

export const getCommercialOffers = (basket) =>
  basket?.reduce(
    (acc, item, i) => (i === 0 ? item.isbn : acc + ',' + item.isbn),
    ''
  )

export const getTotalwithBestOffer = (offers, total) => {
  console.log('offers', offers)
  console.log('total', total)

  let bestOfferApplied

  if (total > 100) {
    bestOfferApplied = offers.forEach(
      (offer) =>
        offer.type === 'slice' &&
        Math.round(total / offer.sliceValue) * offer.value
    )
    console.log('bestoffer', bestOfferApplied)
    // return (
    //   total -
    //   Math.round(total / bestOfferApplied.sliceValue) * bestOfferApplied.value
    // )
  } else {
    bestOfferApplied = offers?.reduce((prev, current) => {
      return prev.value > current.value ? prev.value : current.value
    })
    console.log('bestoffer', bestOfferApplied)
    // return total - bestOfferApplied.value
  }
  return total - bestOfferApplied
}

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      }
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      }

    default:
      break
  }
}

export default reducer
