const express = require('express');
const router = express.Router()

const LessonPlan = require('../../models/lessonplan');
const lessonCtrl = require('../../controllers/lessonplan')


router.post('/', lessonCtrl.create)


module.exports = router;