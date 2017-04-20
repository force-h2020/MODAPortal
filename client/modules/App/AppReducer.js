// Import Actions
import { TOGGLE_ADD_POST, TOGGLE_ADD_MODA, TOGGLE_EDIT_MODA } from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
  showAddModa: false,
  showEditModa: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };

    case TOGGLE_ADD_MODA:
      return {
        showAddModa: !state.showAddModa,
      };

    case TOGGLE_EDIT_MODA:
      return {
        showEditModa: !state.showEditModa,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;

// Get showAddModa
export const getShowAddModa = state => state.app.showAddModa;

// Get showAddModa
export const getShowEditModa = state => state.app.showEditModa;

// Export Reducer
export default AppReducer;
