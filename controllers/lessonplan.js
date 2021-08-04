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

function deleteLesson(req, res){
  LessonPlan.findByIdAndDelete(req.params.id)
  .then(function(lessonPlan) {return LessonPlan.find({}) })  //looked trough lessons after deleting , sending it to next fn
  .then(function(lessonPlan) {res.json(lessonPlan)}) // now making a res.json of changed lessonPlans 
  
}



  module.exports = {
      create,
      lessonPlans,
      delete: deleteLesson
  }
