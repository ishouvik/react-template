import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  SIGN_IN_USER,
  SIGN_IN_USER_SUCCESS,
  SIGN_IN_USER_FAIL,
  SIGN_OUT_USER,
  SIGN_OUT_USER_SUCCESS,
  SIGN_OUT_USER_FAIL,
} from '../../constants/actionTypes';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}
