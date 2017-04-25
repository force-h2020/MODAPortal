import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_MODA = 'ADD_MODA';
export const ADD_MODAS = 'ADD_MODAS';
export const DELETE_MODA = 'DELETE_MODA';
export const UPDATE_MODA = 'UPDATE_MODA';

// Export Actions
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

export function fetchModas() {
  return (dispatch) => {
    return callApi('modas').then(res => {
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
  // Can have getState as second parameter
  return (dispatch) => {
    return callApi(`modas/${cuid}`, 'delete').then(() => dispatch(deleteModa(cuid)));
  };
}
