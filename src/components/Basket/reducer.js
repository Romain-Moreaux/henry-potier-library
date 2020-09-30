export const initialState = {
  basket: [],
}

export const getBasketTotal = (basket) =>
  basket?.reduce((acc, item) => acc + item.price, 0)

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      }

    default:
      break
  }
}

export default reducer
