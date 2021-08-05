// the stuff in this file is to get things to happen in the frontend? Import these into App.js to use 


const BASE_URL = '/api/lessons/'

function index() {
    const options = {
      method: 'GET',

    };
    return fetch(BASE_URL, options).then(res => res.json());
  }


async function deleteLesson (id) {
  const options = {
    method: 'DELETE',

  };
  const res = await fetch(`${BASE_URL}${id}`, options)
  // .then(res => res.json());
  const lesson = await res.json()
  return lesson
}

function handleUpdateLessons(id){
  return fetch(`${BASE_URL}${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(id)
     }).then(res=> res.json())
}

function handleSaveLesson(lesson){
  return lesson.id ? handleUpdateLessons() : index()
}


  export default {
    index,
    deleteLesson,
    handleUpdateLessons,
    handleSaveLesson
  };