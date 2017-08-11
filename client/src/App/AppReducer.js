import { TOGGLE_ADD_MODA, TOGGLE_EDIT_MODA, HIDE_FORMS } from './AppActions'

const initialState = {
  showAddModa: false,
  showEditModa: false,
}

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_MODA:
      return {
        showAddModa: !state.showAddModa,
      }

    case TOGGLE_EDIT_MODA:
      return {
        showEditModa: !state.showEditModa,
      }

    case HIDE_FORMS:
      return {
        showEditModa: false,
        showAddModa: false,
      }

    default:
      return state
  }
}

export const getShowAddModa = state => state.app.showAddModa
export const getShowEditModa = state => state.app.showEditModa
export default AppReducer
