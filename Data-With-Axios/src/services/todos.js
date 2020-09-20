import axios from 'axios';

export function requestRepo() {
    return new Promise ((resolve, reject) => {
      axios.get('https://btm-rn.herokuapp.com/api/v1/users/')
        .then((response) => { 
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
}
