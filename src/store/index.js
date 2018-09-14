import { createStore, applyMiddleware } from 'redux'

import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import reducer from 'src/store/reducers'

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
);
