import callApi from '../../util/apiCaller';

export const ADD_MODA = 'ADD_MODA';
export const ADD_MODAS = 'ADD_MODAS';
export const DELETE_MODA = 'DELETE_MODA';
export const UPDATE_MODA = 'UPDATE_MODA';

export function addModa(moda) {
  return {
    type: ADD_MODA,
    moda,
  };
}

export function addModaRequest(moda) {
  return (dispatch) => {
    return callApi('modas', 'post', moda).then(res => dispatch(addModa(res.moda)));
  };
}

export function addModas(modas) {
  return {
    type: ADD_MODAS,
    modas,
  };
}

export function updateModa(moda) {
  return {
    type: UPDATE_MODA,
    moda,
  };
}

export function updateModaRequest(moda) {
  return (dispatch) => {
    return callApi(`modas/${moda.cuid}`, 'put', moda).then(res => dispatch(updateModa(res.moda)));
  };
}

export function fetchModas(query) {
  var endpoint = 'modas'
  if (query) {
    endpoint = 'modas?query=' + query['query']
  }
  return (dispatch) => {
    return callApi(endpoint).then(res => {
      dispatch(addModas(res.modas));
    });
  };
}

export function fetchModa(cuid) {
  return (dispatch) => {
    return callApi(`modas/${cuid}`).then(res => dispatch(addModa(res.moda)));
  };
}

export function deleteModa(cuid) {
  return {
    type: DELETE_MODA,
    cuid,
  };
}

export function deleteModaRequest(cuid) {
  return (dispatch) => {
    return callApi(`modas/${cuid}`, 'delete').then(() => dispatch(deleteModa(cuid)));
  };
}
