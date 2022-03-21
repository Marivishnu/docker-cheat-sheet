const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json([{
    name: 'Sami Zayn',
    email: 'sami.zayn@email.com'
},
	{
	 name: 'Seth Rollins',
	 email: 'seth.rollins@email.com'
	},
	{
	 name: 'MJF',
	 email: 'max@email.com'
	}

]))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
