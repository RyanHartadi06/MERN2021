var express = require('express');
var router = express.Router();
const { index , viewCreate ,actionCreate , actionDelete , viewEdit , actionEdit} = require('./controller')
const {isLogin} = require('../middleware/auth');

router.use(isLogin);
router.get('/', index);
router.get('/create', viewCreate);
router.post('/create', actionCreate);
router.get('/edit/:id', viewEdit);
router.put('/update/:id', actionEdit);
router.delete('/delete/:id', actionDelete);
// router.put('/status/:id', actionStatus);

module.exports = router;
