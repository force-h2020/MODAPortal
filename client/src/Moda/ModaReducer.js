import { ADD_MODA, ADD_MODAS, DELETE_MODA, UPDATE_MODA } from './constants'

const initialState = { data: [] }

const ModaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MODA :
      return {
        data: [action.moda, ...state.data],
      }

    case ADD_MODAS :
      return {
        data: action.modas,
      }

    case DELETE_MODA :
      return {
        data: state.data.filter(moda => moda.cuid !== action.cuid),
      }

    case UPDATE_MODA : {
      const d1 = state.data.filter(moda => moda.cuid !== action.moda.cuid)
      state.data.pop(d1)
      state.data.push(action.moda)
      return {
        data: state.data,
      }
    }

    default:
      return state
  }
}

export default ModaReducer
