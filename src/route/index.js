__path = process.cwd()
const router = require('express').Router();
const route = router;
const fs = require('fs');

route.get('/', (req, res) => {
    res.redirect('/api?url=');
});

route.get('/api', function(req, res) {
    const url = req.query.url
    if (!url) return res.send('Enter URL params')
    
    const json = fs.readFileSync(__path + '/database/count.json', 'utf-8');
    const obj = JSON.parse(json);
    
    obj.hit = obj.hit+1;
    
    const newJSON = JSON.stringify(obj);
    
    fs.writeFileSync(__path + '/database/count.json', newJSON);
    res.send(newJSON);
});

route.get('*', (req, res) => {
    res.status(404).json({
        method : req.method,
        message : 'cant find spesific endpoint, please make sure you read a documentation',
        status : false,
        code : 401,
    });
});

module.exports = route;
