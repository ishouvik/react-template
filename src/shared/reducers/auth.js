import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  SIGN_IN_USER,
  SIGN_IN_USER_SUCCESS,
  SIGN_IN_USER_FAIL,
  SIGN_OUT_USER,
  SIGN_OUT_USER_SUCCESS,
  SIGN_OUT_USER_FAIL,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  auth_token: '',
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case SIGN_IN_USER:
      return { ...state, loading: true, error: '' };
    case SIGN_IN_USER_SUCCESS:
      return {
        ...state,
        auth_token: action.payload.auth_token,
        user: action.payload,
        loading: false
      };
    case SIGN_IN_USER_FAIL:
      return { ...state, error: action.payload, password: '', loading: false }
    case SIGN_OUT_USER:
      return { ...state, loading: true }
    case SIGN_OUT_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE }
    case SIGN_OUT_USER_FAIL:
      return { ...state, error: 'Sorry, could not sign out', loading: false }
    default:
      return state;
  }
};
