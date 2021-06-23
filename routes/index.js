const { json } = require('express');
var express = require('express');
var router = express.Router();
const sql = require('../dboperation');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//test connection db
router.get('/test', function(req, res, next) {
  sql.getdata();
  res.render('index', { title: 'Express' });
});

//get/post username pass
router.all('/getUser', function(req, res, next){
  sql.getdata_withQuery().then((result) => {
    res.json(result[0]);
  });
});

//get question from db
router.get('/getPertanyaan', function(req, res, next){
  sql.getdata_mstpertanyaan().then((result) => {
    res.json(result[0]);
  });
});

//get jawaban from db
router.get('/getJawaban', function(req, res, next){
  sql.getdata_mstjawaban().then((result) => {
    res.json(result[0]);
  });
});

//post jawaban to DB
router.all('/hasilJawaban', function(req, res, next){
  sql.getdata_hasiljawaban().then((result) => {
    res.json(result[0]);
  });
});

//get karyawan information
router.get('/getKaryawan', function(req, res, next){
  sql.getdata_karyawan().then((result) => {
    res.json(result[0]);
  });
});


module.exports = router;
