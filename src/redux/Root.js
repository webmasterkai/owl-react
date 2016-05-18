import React, { PropTypes } from 'react'
// Component makes Redux store available to the connect() calls in children.
import { connect, Provider } from 'react-redux'

import App from '../components/App'
import DevTools from './DevTools'
import { ErrorMessage } from './errMsg'

const AppWrap = connect()(App)

export default function Root({ store }) {
  // Provider only wants a single child.
  return (
    <Provider store={store}>
      <div>
        <ErrorMessage />
        <AppWrap />
        <DevTools />
      </div>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}
