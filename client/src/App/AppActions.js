import { TOGGLE_ADD_MODA, TOGGLE_EDIT_MODA, HIDE_FORMS } from './constants'


export function toggleAddModa() {
  return {
    type: TOGGLE_ADD_MODA,
  }
}

export function toggleEditModa() {
  return {
    type: TOGGLE_EDIT_MODA,
  }
}

export function hideForms() {
  return {
    type: HIDE_FORMS,
  }
}
