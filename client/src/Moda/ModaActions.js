import * as types from './constants'
import callApi from '../api'


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
    history: history.history,
    cuid: history.cuid
  }
}

export function updateNewModaDraft(moda) {
  return {
    type: types.UPDATE_NEW_MODA_DRAFT,
    moda
  }
}

export function addModaRequest(moda) {
  return (dispatch) => {
    return callApi('modas', 'post', moda).then(res => dispatch(addModa(res.data.moda)))
  }
}

export function updateModaRequest(moda) {
  return (dispatch) => {
    return callApi(`modas/${moda.cuid}`, 'put', moda)
    .then(res => dispatch(updateModa(res.data.moda)))
  }
}

export function fetchModas(query) {
  var endpoint = 'modas'
  if (query) {
    endpoint = 'modas?query=' + query['query']
  }
  return (dispatch) => {
    return callApi(endpoint).then(res => {
      dispatch(addModas(res.data.modas))
    })
  }
}

export function fetchModa(cuid) {
  return (dispatch) => {
    return callApi(`modas/${cuid}`).then(res => dispatch(addModa(res.data.moda)))
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
      dispatch(addModaHistory({history: res.data.history, cuid: cuid}))
    })
  }
}
