import React from 'react'
// import { Provider } from 'react-redux'
// import { BrowserRouter } from 'react-router-dom'
// import { ConnectedRouter } from 'connected-react-router'

import CoreLayout from 'src/components/Layouts/CoreLayout'
import Home from 'src/pages/Home'

// import store from 'src/store'

const App = () => (
  <CoreLayout>
    <Home />
  </CoreLayout>
)
// <Provider store={store}>
// </Provider>

export default App
