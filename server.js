const path = require('path')
const Express = require('express')

const app = new Express()

const port = process.env.PORT || 3000

if (process.env.NODE_ENV !== 'production') {
  require('./devServer')(app)
}

app.use(Express.static('static'))

// Respond to everything else with index.html
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
