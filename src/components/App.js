import React, { PropTypes } from 'react'

function App() {
  return (
    <div id="wrapper">
      <h1>hi</h1>
    </div>
  )
}

App.propTypes = {
  route: PropTypes.object.isRequired,
}

export default App
