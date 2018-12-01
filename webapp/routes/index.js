var express = require('express');

var router = express.Router();
var app = express();

var MongoClient = require('mongodb').MongoClient
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
  var MongoClient = require('mongodb').MongoClient

  MongoClient.connect('mongodb://localhost:27017/foo', function (err, client) {
    if (err) throw err
    var resultado;
    var db = client.db('foo')

    db.collection('foo').find().toArray(function (err, result) {
      if (err) throw err

      console.log(result)
      resultado = result;
    })
    // db.collection('foo').save({id:2, nombre:'berto'});
  })


});

router.get('/getUsers', function (req, res, next) {

  MongoClient.connect('mongodb://localhost:27017/foo', function (err, client) {
    if (err) throw err
    var resultado;
    var db = client.db('foo')

    db.collection('foo').find().toArray(function (err, result) {
      if (err) throw err

      console.log(result)
      res.send(result);
    })
    // db.collection('foo').save({id:2, nombre:'berto'});
  })
});


router.post('/saveUsers', function (req, res, next) {
  console.log(req.body.nombre);
  console.log(req.body.password);

  var j = {
    nombre: req.body.nombre,
    password: req.body.password
  };

  try {
    MongoClient.connect('mongodb://localhost:27017/foo', function (err, client) {
      if (err) throw err
      var resultado;
      var db = client.db('foo')
      db.collection('foo').save(j);
    });
    res.send('OK');
  } catch (error) {
    res.send('ERROR AL GUARDAR!');
  }
});



module.exports = router;