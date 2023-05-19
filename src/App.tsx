import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <>
      <h1>Prueba reduxs</h1></>
    </Provider>
  )
}

export default App
