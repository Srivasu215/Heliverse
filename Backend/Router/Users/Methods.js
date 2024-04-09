let express = require("express");
let router = express.Router();
let controller = require("../../Controllers/Users")

router.get('/', controller.findAllFunc);
router.get('/:Id', controller.findOneFunc);

router.post('/', controller.insertOneFunc);
router.post('/Many', controller.insertManyFunc);
router.post('/deleteMany/:Id', controller.deleteManyFunc);

router.put('/:Id', controller.PutOneFunc);

router.delete('/:Id', controller.deleteOneFunc);




module.exports = router;