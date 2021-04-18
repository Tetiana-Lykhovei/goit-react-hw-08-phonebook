import { createReducer } from "@reduxjs/toolkit";

import {
  registrationError,
  loginError,
  logoutError,
  getCurrentUserError,
} from "./auth/auth-actions";

import {
  fetchContactsError,
  addContactError,
  deleteContactError,
} from "./contacts/contact-actions.js";

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [registrationError]: setError,
  [loginError]: setError,
  [logoutError]: setError,
  [getCurrentUserError]: setError,
  [fetchContactsError]: setError,
  [addContactError]: setError,
  [deleteContactError]: setError,
});
export default error;
