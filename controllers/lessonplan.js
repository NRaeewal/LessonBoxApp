const LessonPlan = require ('../models/lessonplan')

  
async function create(req, res) {
    const lesson = new LessonPlan(req.body);
    try {
      await lesson.save();
      res.json(lesson)
    } catch (err) {
      res.status(400).json(err);
    }
  };


  module.exports = {
      create
  }
