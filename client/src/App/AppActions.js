import { TOGGLE_ADD_MODA, TOGGLE_EDIT_MODA, HIDE_FORMS, RESET_NAVBAR, NEW_MSG, RESET_MSG } from './constants'


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

export function resetNavbar() {
  return {
    type: RESET_NAVBAR,
  }
}

export function newMessage(message) {
  return {
    type: NEW_MSG,
    message: message
  }
}

export function resetMessage() {
  return {
    type: RESET_MSG,
  }
}