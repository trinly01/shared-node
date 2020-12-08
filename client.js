// const ErrorStackParser = require('error-stack-parser')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const cors = require('cors')
app.use(cors())

let objs = {}

async function init () {
  const { sharedCodeClient } = require('./index.js')

  objs = await sharedCodeClient('http://localhost:3000', [
    {
      address: 'human',
      name: 'human'
    }
  ])
}
init()


app.get('/', async function (req, res) {
  let { human } = objs

  console.log(human)

  res.json(await human.run(100))
})

app.get('/obj', async function (req, res) {
  let { human } = objs

  console.log(human)

  res.json(await human.obj('pogi ko talaga'))

  // res.json('pogi')
})

app.listen(8080)