import * as types from './constants'

const initialState = { data: [] }

const ModaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MODA:
      return {
        data: [action.moda, ...state.data],
      }

    case types.ADD_MODAS:
      return {
        data: action.modas,
      }

    case types.ADD_MODA_HISTORY:
      const index = state.data.findIndex(x => action.history.refId === x._id)
      state.data[index]['history'] = action.history
      return {
        data: state.data,
      }

    case types.DELETE_MODA:
      return {
        data: state.data.filter(moda => moda.cuid !== action.cuid),
      }

    case types.UPDATE_MODA: {
      const index = state.data.findIndex(x => x.cuid === action.moda.cuid)
      state.data[index] = action.moda
      return {
        data: state.data,
      }
    }

    default:
      return state
  }
}

export default ModaReducer
