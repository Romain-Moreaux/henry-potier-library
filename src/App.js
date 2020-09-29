import React from 'react'
import { ThemeProvider } from 'react-jss'
import './App.css'
import RoutesController from './components/router'
import WebFont from 'webfontloader'
import { themeValue } from './themeValue'

WebFont.load({
  google: {
    families: ['Nunito Sans:300,400,600,700,800,900', 'sans-serif'],
  },
})

function App() {
  return (
    <ThemeProvider theme={themeValue}>
      <div className="App">
        <RoutesController />
      </div>
    </ThemeProvider>
  )
}

export default App
