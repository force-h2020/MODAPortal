import * as types from './constants'
import callApi from '../api'
//import axios from 'axios'


export function addModa(moda) {
  return {
    type: types.ADD_MODA,
    moda,
  }
}

export function addModas(modas) {
  return {
    type: types.ADD_MODAS,
    modas,
  }
}

export function updateModa(moda) {
  return {
    type: types.UPDATE_MODA,
    moda,
  }
}

export function deleteModa(cuid) {
  return {
    type: types.DELETE_MODA,
    cuid,
  }
}

export function addModaHistory(history) {
  return {
    type: types.ADD_MODA_HISTORY,
    history,
  }
}


// function makeUserRequest(method, data, api="/login") {
//   // returns a Promise
//   return axios({
//     method: method,
//     url: api,
//     data: data
//   })
// }

export function addModaRequest(moda) {
  return (dispatch) => {
    return callApi('modas', 'post', moda).then(res => dispatch(addModa(res.moda)))
  }
}

export function updateModaRequest(moda) {
  return (dispatch) => {
    return callApi(`modas/${moda.cuid}`, 'put', moda)
    .then(res => dispatch(updateModa(res.moda)))
  }
  // return (dispatch) => {
  //   return makeUserRequest("put", moda, `/api/modas/${moda.cuid}`) 
  //     .then(response => {
  //         return updateModa(moda)
  //     })
  //     .catch(function (response) {
  //         if (response instanceof Error) {
  //           // Something happened in setting up the request that triggered an Error
  //           console.log('Error', response.message);
  //         }
  //       })
  // }
}

export function fetchModas(query) {
  var endpoint = 'modas'
  if (query) {
    endpoint = 'modas?query=' + query['query']
  }
  return (dispatch) => {
    return callApi(endpoint).then(res => {
      dispatch(addModas(res.modas))
    })
  }
}

export function fetchModa(cuid) {
  return (dispatch) => {
    return callApi(`modas/${cuid}`).then(res => dispatch(addModa(res.moda)))
  }
}

export function deleteModaRequest(cuid) {
  return (dispatch) => {
    return callApi(`modas/${cuid}`, 'delete').then(() => dispatch(deleteModa(cuid)))
  }
}

export function fetchModaHistory(cuid) {
  return (dispatch) => {
    return callApi(`modas/${cuid}/history`).then(res => {
      dispatch(addModaHistory(res.history))
    })
  }
}
