let axios = require('axios')

module.exports = function(app, db) {
    app.post('/user', (req, res) => {
        // You'll create your note here.
        console.log(req.body)
        res.send('Hello')
    });
    app.post('/test', (req, res) => {
        // You'll create your note here.
        axios
            .get('https://webcamstravel.p.rapidapi.com/webcams/list/nearby=40.11,12.05,5000',
                {
                    headers : {
                        'Content-Type':'application/x-www-form-urlencoded',
                        'X-Mashape-Key': 'JviyEmZi47msh0CazXqu01lns7yip1Ak2uPjsnJUCMan059fuE',
                        'X-Mashape-Host': 'webcamstravel.p.rapidapi.com'
                    }
                })
            .then(function(response) {
                console.log(response)
                res.send(response.data)
            }).catch(function(err){
                console.error(err)
            })
    });
};