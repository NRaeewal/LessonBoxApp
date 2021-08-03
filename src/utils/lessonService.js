const BASE_URL = '/api/lessons/'

function index() {
    const options = {
      method: 'GET',

    };
    return fetch(BASE_URL, options).then(res => res.json());
  }


  export default {
    index
  };