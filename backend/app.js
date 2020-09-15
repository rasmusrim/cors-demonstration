const express = require('express')
const app = express()
const port = 3000

app.get('/no-headers', (req, res) => {
	const result = {
		result: "received"
	}
	res.send(result)
})

app.get('/with-headers', (req, res) => {
	const result = {
		result: "GET received"
	}

	res.header('Access-Control-Allow-Origin', 'http://localhost:3001')
	res.send(result)
})

app.post('/with-headers', (req, res) => {
	const result = {
		result: "POST received"
	}

	res.header('Access-Control-Allow-Origin', 'http://localhost:3001')
	res.send(result)
})

app.delete('/with-headers', (req, res) => {
	const result = {
		result: "DELETE received"
	}

	res.header('Access-Control-Allow-Origin', 'http://localhost:3001')
	res.send(result)
})

app.delete('/with-preflight', (req, res) => {
	const result = {
		result: "DELETE received"
	}

	res.header('Access-Control-Allow-Origin', 'http://localhost:3001')
	res.send(result)
})

app.options('/with-preflight', (req, res) => {
	const result = {
		result: "OPTIONS received"
	}

	console.log("Preflight OPTIONS request received")

	res.header('Access-Control-Allow-Origin', 'http://localhost:3001')
	res.header('Access-Control-Allow-Headers', 'funny-header')
	res.header('Access-Control-Allow-Methods', 'DELETE')
	res.send(result)
})

app.post('/with-preflight', (req, res) => {
	const result = {
		result: "POST with funny header received"
	}

	res.header('Access-Control-Allow-Origin', 'http://localhost:3001')
	res.send(result)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
