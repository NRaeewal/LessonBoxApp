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


  export default {
    index,
    deleteLesson
  };