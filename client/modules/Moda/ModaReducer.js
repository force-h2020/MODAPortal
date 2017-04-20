import { ADD_MODA, ADD_MODAS, DELETE_MODA, UPDATE_MODA } from './ModaActions';

// Initial State
const initialState = { data: [] };

const ModaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MODA :
      return {
        data: [action.moda, ...state.data],
      };

    case ADD_MODAS :
      return {
        data: action.modas,
      };

    case DELETE_MODA :
      return {
        data: state.data.filter(moda => moda.cuid !== action.cuid),
      };

    case UPDATE_MODA :
      //data = state.data.filter(moda => moda.cuid !== action.moda.cuid);
      let d1 = state.data.filter(moda => moda.cuid !== action.moda.cuid);
      state.data.pop(d1);
      state.data.push(action.moda);
      return {
        //data: [action.moda, ...data],
        //data: state.data.filter(moda => moda.cuid !== action.moda.cuid),
        data: state.data,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all modas
export const getModas = state => state.modas.data;

// Get moda by cuid
export const getModa = (state, cuid) => state.modas.data.filter(moda => moda.cuid === cuid)[0];

// Export Reducer
export default ModaReducer;
