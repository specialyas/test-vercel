const express = require('express')
const app = express()
require('dotenv').config()


const port = process.env.PORT || 3000;


// middleware
app.set('view engine', 'ejs');






// homepage
app.get('/', (req, res) => {
    res.send('Helloworld')
})

// show all words
app.get('/words', (req, res) => {
    res.send('Words page')

})



app.listen(port, () => {
    console.log(`Connected to port ${port}`);
})