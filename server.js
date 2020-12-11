const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const cors = require('cors')
app.use(cors())
app.listen(3000)

class Person {
  constructor() {
    this.name = 'Trinmar Pogi'
  }
  run(speed) {
    return `${this.name} is running at ${speed}km/h`
  }
  eat(food) {
    return `${this.name} is eating ${food}`
  }
  talk(speech) {
    return speech
  }
}

let human = new Person('Trinmar Pogi')

// see the magic here 🧙
const { sharedCodeServer } = require('shared-node')
app.use(sharedCodeServer({ human }))