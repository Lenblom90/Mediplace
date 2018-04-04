const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8000

const users = {
  username: 'password',
}

const app = express()
app.use(bodyParser.json())

app.post('*', (req, res) => {
  const {username, password} = req.body

  if (!username || !password) return res.status(400).send('Missing username or password')
  if (!users[username]) return res.status(403).send('user does not exist')
  if (!users[username] !== password) return res.status(400).send('Incorrect Password')
    return res.status(200).send()
})

// catch 404
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => res.status(err.status || 500).send(err.message || 'there was a problem'))

const server = app.listen(PORT)
console.log('Listening at http://localhost:${PORT}')
