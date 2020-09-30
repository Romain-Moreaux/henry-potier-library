import React, { createContext, useContext, useReducer } from 'react'
import reducer, { initialState } from './reducer'

export const BasketContext = createContext()

export const BasketProvider = ({ children }) => (
  <BasketContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </BasketContext.Provider>
)

export default BasketProvider

export const useBasketContext = () => useContext(BasketContext)
