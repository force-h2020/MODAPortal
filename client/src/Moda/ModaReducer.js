import * as types from './constants'

const initialState = {
  data: [],
  draft: null
}

const ModaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MODA: {
      const index = state.data.findIndex(x => action.moda.cuid === x.cuid)
      if (index >= 0) {
        state.data[index] = action.moda
      } else {
        state.data.push(action.moda)
      }
      return {
        data: state.data,
      }
    }
    case types.ADD_MODAS:
      return {
        data: action.modas,
      }

    case types.ADD_MODA_HISTORY: {
      if (action.history) {
        const index = state.data.findIndex(x => action.history.refId === x._id)
        state.data[index]['history'] = action.history
      } else {
        const index = state.data.findIndex(x => action.cuid === x.cuid)
        state.data[index]['history'] = []
      }
      return {
        data: state.data,
      }
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

    case types.UPDATE_NEW_MODA_DRAFT: {
      return {
        data: state.data,
        draft: action.moda
      }
    }


    default:
      return state
  }
}

export default ModaReducer
