var express = require('express');
var router = express.Router();
fs = require("fs");


/* GET file list */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST file */
router.post('/', function(req, res, next) {
  //res.send('the server has uploaded ' + req.body.name);
  console.log('%s %s %s', req.method, req.url, req.path);
  console.log(req.query.name);
  console.log(req.body);

  //res.writeHead(200, {"Content-Type": "text/html"});
  fs.createReadStream(req.body.name).pipe(res);
});

module.exports = router;
