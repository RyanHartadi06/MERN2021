var express = require('express');
var router = express.Router();
const { landingpage , detailpage} = require('./controller')

router.get('/landingpage', landingpage);
router.get('/:id/detail', detailpage);

module.exports = router;
