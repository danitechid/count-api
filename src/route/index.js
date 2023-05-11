__path = process.cwd()
const router = require('express').Router();
const route = router;
const fs = require('fs');

route.get('/', (req, res) => {
    res.redirect('/hit?url=visits');
});

route.get('/api', (req, res) => {
    res.redirect('/hit?url=visits');
});

route.get('/hit', function(req, res) {
    const url = req.query.url
    if (!url) return res.send('Enter URL params')
    
    const json = fs.readFileSync(__path + '/database/hit/' + url + '.json', 'utf-8');
    const obj = JSON.parse(json);
    
    obj.value = obj.value+1;
    
    const newJSON = JSON.stringify(obj);
    
    fs.writeFileSync(__path + '/database/hit/' + url + '.json', newJSON);
    res.sendFile(__path + '/database/hit/' + url + '.json');
});

route.get('/hit/visits', function(req, res) {
    const json = fs.readFileSync(__path + '/database/hit/visits.json', 'utf-8');
    const obj = JSON.parse(json);
    
    obj.value = obj.value+1;
    
    const newJSON = JSON.stringify(obj);
    
    fs.writeFileSync(__path + '/database/hit/visits.json', newJSON);
    res.sendFile(__path + '/database/hit/visits.json');
});

route.get('/hit/requesttoday', function(req, res) {
    const json = fs.readFileSync(__path + '/database/hit/requesttoday.json', 'utf-8');
    const obj = JSON.parse(json);
    
    obj.value = obj.value+1;
    
    const newJSON = JSON.stringify(obj);
    
    fs.writeFileSync(__path + '/database/hit/requesttoday.json', newJSON);
    res.sendFile(__path + '/database/hit/requesttoday.json');
});

route.get('/hit/totalrequest', function(req, res) {
    const json = fs.readFileSync(__path + '/database/hit/totalrequest.json', 'utf-8');
    const obj = JSON.parse(json);
    
    obj.value = obj.value+1;
    
    const newJSON = JSON.stringify(obj);
    
    fs.writeFileSync(__path + '/database/hit/totalrequest.json', newJSON);
    res.sendFile(__path + '/database/hit/todayrequest.json');
});

module.exports = route;