const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const cors = require('cors')
app.use(cors())

app.get('/', function (req, res) {
  res.send('Server')
})

app.listen(3000)

class  Person {
	constructor() {
		this.name = 'Trinmar Pogi'
	}
	run (speed) {
		return `${this.name} is running at ${speed}km/h`
	}
}

const  human = new  Person()
human.name = 'Mr. Pogi'

const { sharedCodeServer } = require('./index.js')

app.use(sharedCodeServer({
  human
}))

// const clientHuman = sharedCode()
// clientHuman.obj('testing', 1)
// console.log(clientHuman)