export const initialState = {
  basket: [],
}

export const getBasketTotal = (basket) =>
  basket?.reduce((acc, item) => acc + item.price, 0)

export const getCommercialOffers = (basket) =>
  basket?.reduce(
    (acc, item, i) => (i === 0 ? item.isbn : acc + ',' + item.isbn),
    ''
  )

export const getTotalwithBestOffer = (offers, total) => {
  if (!offers || !total) return 0

  let bestDiscount = offers.reduce((prev, current) => {
    let temp
    // let discount =
    //   current.type === 'slice'
    //     ? Math.ceil(total / current.sliceValue) * current.value
    //     : current.value
    if (current.type === 'slice') {
      temp = Math.ceil(total / current.sliceValue) * current.value
    } else if (current.type === 'percentage') {
      temp = (total * current.value) / 100
    } else {
      temp = current.value
    }
    return prev > temp ? prev : temp
  }, 0)

  return total - bestDiscount
}

const reducer = (state, action) => {
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
      return state
  }
}

export default reducer
