# Welcome to shared-node!

  

<p  align="center">

<img  width="300"  src="https://miro.medium.com/max/3728/1*7zccGWE4o5LmxegijjK_xQ.png"/>

</p>

  

**Call a remote function or method of a remote object from an  Express App** that can be shared to any frontend frameworks.


## Installation
```bash
npm install shared-node
```
or
```bash
yarn add shared-node
```

## CDN
```html
<script  src="https://unpkg.com/shared-node/dist/index.js"></script>
```

  

## Server

```javascript
// Server.js
const  express = require('express')
const  app = express()
const  bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:  true }))
const  cors = require('cors')
app.use(cors())

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

const { sharedCodeServer } = require('shared-node')

app.use(sharedCodeServer([
	{
		address:  'human', // optional
		obj:  human
	}
]))
```

## Client
```javascript
async  function  init () {
	const { sharedCodeClient } = require('shared-node')
	// const { sharedCodeClient } = sharedNode // for CDN
	
	const { human } = await  sharedCodeClient('http://localhost:3000', [
		{
			address:  'human',
			name:  'human'
		}
	])
	console.log(await  human.run(100)) // Mr. Pogi is running at 100km/h
}
init()
```
  

>  **Join and support our Community**  <br  />

> Web and Mobile Developers PH <br  />

> [ [Facebook Page](https://fb.com/webmobile.ph) | [Group](https://fb.com/groups/webmobile.ph/) ]

  

# *Join and support our Community* <br /> **Web and Mobile Developers PH** <br/> [ [Facebook Page](https://fb.com/webmobile.ph) | [Group](https://fb.com/groups/webmobile.ph/) ]