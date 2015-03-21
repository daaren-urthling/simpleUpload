var express = require('express');
var router = express.Router();
fs = require("fs");


/* GET file list */
router.get('/', function(req, res, next) {
  res.send('coming soon: list of files');
});

/* GET single file */
router.get('/:name', function(req, res, next) {
  console.log(req.params.name);
  fs.createReadStream(req.params.name).pipe(res);
});

/* POST file */
router.post('/', function(req, res, next) {
  console.log(req.body.name);
  console.log(req.body.content);

  fs.writeFile(req.body.name, req.body.content, function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
  });

  res.send('the server has uploaded ' + req.body.name);
});

module.exports = router;
