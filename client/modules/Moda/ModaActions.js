import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_MODA = 'ADD_MODA';
export const ADD_MODAS = 'ADD_MODAS';
export const DELETE_MODA = 'DELETE_MODA';

// Export Actions
export function addModa(moda) {
  return {
    type: ADD_MODA,
    moda,
  };
}

export function addModaRequest(moda) {
  return (dispatch) => {
    return callApi('modas', 'moda', {
      moda: {
        name: moda.name,
        title: moda.title,
        content: moda.content,
      },
    }).then(res => dispatch(addModa(res.moda)));
  };
}

export function addModas(modas) {
  return {
    type: ADD_MODAS,
    modas,
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
  return (dispatch) => {
    return callApi(`modas/${cuid}`, 'delete').then(() => dispatch(deleteModa(cuid)));
  };
}
