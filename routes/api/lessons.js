const express = require('express');
const router = express.Router()

const lessonCtrl = require('../../controllers/lessonplan')


router.get('/', lessonCtrl.lessonPlans)

router.post('/', lessonCtrl.create)


module.exports = router;