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


async function lessonPlans(req, res){
  const lessons = await LessonPlan.find({})
  res.json(lessons)
}

  module.exports = {
      create,
      lessonPlans
  }
