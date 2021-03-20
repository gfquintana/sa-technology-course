const express = require('express');
const app = express();
const moment = require('moment-timezone');
const router = express.Router();

router.get('/pedir-muzza', function (req, res) {
    let query = req.query
    if (query && query.tz) {
        res.send({
            time: moment().tz(query.tz).format().toString()
        });
    } else {
        res.status(400).send({
            code: 'Missing argument',
            description: 'The "tz" parameter is missing'
        })
    }
});


app.use(router)

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});