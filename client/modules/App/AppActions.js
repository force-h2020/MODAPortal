// Export Constants
export const TOGGLE_ADD_MODA = 'TOGGLE_ADD_MODA';
export const TOGGLE_EDIT_MODA = 'TOGGLE_EDIT_MODA';
export const HIDE_FORMS = 'HIDE_FORMS';


// Export Actions
export function toggleAddModa() {
  return {
    type: TOGGLE_ADD_MODA,
  };
}

// Export Actions
export function toggleEditModa() {
  return {
    type: TOGGLE_EDIT_MODA,
  };
}

export function hideForms() {
  return {
    type: HIDE_FORMS,
  };
}
