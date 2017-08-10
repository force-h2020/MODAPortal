import axios from 'axios'


export default function callApi(endpoint, method='get', data) {
  return axios({
    method: method,
    url: `/api/${endpoint}`,
    data: data
  })
  .then(response => response.data)
}



// export default function callApi(endpoint, method = 'get', body) {
//   return fetch(`${API_URL}/${endpoint}`, {
//     headers: { 'content-type': 'application/json' },
//     method,
//     body: JSON.stringify(body),
//   })
//   .then(response => response.json().then(json => ({ json, response })))
//   .then(({ json, response }) => {
//     if (!response.ok) {
//       return Promise.reject(json);
//     }

//     return json;
//   })
//   .then(
//     response => response,
//     error => error
//   );
// }
