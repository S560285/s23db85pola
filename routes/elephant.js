var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('elephant', { title: 'Search Results elephant' });
});

var express = require('express');
const elephant_controlers= require('../controllers/elephant');

const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
  }
var router = express.Router();
/* GET elephant */
router.get('/', elephant_controlers.elephant_view_all_Page );
/* GET detail elephant page */
router.get('/detail', elephant_controlers.elephant_view_one_Page);
/* GET create costume page */
router.get('/create', elephant_controlers.elephant_create_Page);
/* GET create update page */
router.get('/update',secured, elephant_controlers.elephant_update_Page);
/* GET delete costume page */
router.get('/delete', elephant_controlers.elephant_delete_Page);

module.exports = router;