const express = require('express');

const route = express();

route.get('/hello', (req, res) => {
    res.send('there')
})

route.listen(3001, () => {
    console.log('listening 3001')
}) 