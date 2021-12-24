var express = require('express');
var router = express.Router();
const { landingpage , detailpage , category} = require('./controller')

router.get('/landingpage', landingpage);
router.get('/:id/detail', detailpage);
router.get('/category', category);

module.exports = router;
