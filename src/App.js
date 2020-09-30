import React from 'react'
import { ThemeProvider } from 'react-jss'
import RoutesController from './components/router'
import WebFont from 'webfontloader'
import { themeValue } from './themeValue'
import BasketProvider from './components/Basket'

WebFont.load({
  google: {
    families: ['Nunito Sans:300,400,600,700,800,900', 'sans-serif'],
  },
})

function App() {
  return (
    <ThemeProvider theme={themeValue}>
      <BasketProvider>
        <div className="App">
          <RoutesController />
        </div>
      </BasketProvider>
    </ThemeProvider>
  )
}

export default App
