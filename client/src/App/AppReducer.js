import { TOGGLE_ADD_MODA, TOGGLE_EDIT_MODA, HIDE_FORMS, NAVBAR_ACTIONS, RESET_NAVBAR, NEW_MSG, RESET_MSG } from './constants'

const initialState = {
  showAddModa: false,
  showEditModa: false,
  message: null,
  navActions: []
}

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_MODA:
      return {
        showAddModa: !state.showAddModa,
        showEditModa: state.showEditModa,
        navActions: state.navActions
      }

    case TOGGLE_EDIT_MODA:
      return {
        showAddModa: state.showAddModa,
        showEditModa: !state.showEditModa,
        navActions: state.navActions
      }

    case HIDE_FORMS:
      return {
        showEditModa: false,
        showAddModa: false,
        navActions: state.navActions
      }

    case NAVBAR_ACTIONS:
      return {
        showAddModa: state.showAddModa,
        showEditModa: state.showEditModa,
        navActions: action.payload
      }

    case RESET_NAVBAR:
      return {
        showAddModa: state.showAddModa,
        showEditModa: state.showEditModa,
        navActions: []
      }

    case NEW_MSG:
      return {
        showAddModa: state.showAddModa,
        showEditModa: state.showEditModa,
        navActions: state.navActions,
        message: action.message
      }

    case RESET_MSG:
      return {
        showAddModa: state.showAddModa,
        showEditModa: state.showEditModa,
        navActions: state.navActions,
        message: null
      }

    default:
      return state
  }
}

export default AppReducer
