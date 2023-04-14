var express = require('express');
var router = express.Router();
const elephant_controlers= require('../controllers/elephant');
/* GET costumes */
router.get('/', elephant_controlers.elephant_view_all_Page );
module.exports = router;