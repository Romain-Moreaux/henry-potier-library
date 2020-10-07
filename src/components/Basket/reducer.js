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
  if (!Array.isArray(offers) || !offers.length || typeof total !== 'number')
    return 0

  let bestDiscount = offers.reduce((prev, current) => {
    let discount
    if (current.type === 'slice')
      discount = Math.ceil(total / current.sliceValue) * current.value
    else if (current.type === 'percentage')
      discount = (total * current.value) / 100
    else discount = current.value

    return prev > discount ? prev : discount
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
