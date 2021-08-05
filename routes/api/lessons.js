const express = require('express');
const router = express.Router()

const lessonCtrl = require('../../controllers/lessonplan')


router.get('/', lessonCtrl.lessonPlans)

router.post('/', lessonCtrl.create)


router.delete('/:id', lessonCtrl.delete)

router.get('/:id', lessonCtrl.show)


module.exports = router;