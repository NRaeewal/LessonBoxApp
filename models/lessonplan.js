const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
    name: String,
    grade: String,
    subject: String,
    materials: Array,
    time: Number,
    information: String,
    links: String,
    attachments: String
});

module.exports = mongoose.model('Lesson', lessonSchema)
