const express = require('express')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
    const result = await waiter();
    res.send(result);
});

function waiter() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('2Done ' + (Math.random().toFixed(2) * 10));
        }, 15000);
    })
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
