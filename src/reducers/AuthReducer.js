const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  loading: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case 'EMAIL_CHANGED':
    return { ...state, email: action.payload };
  case 'PASSWORD_CHANGED':
    return { ...state, password: action.payload };
  case 'LOGIN_START': 
    return { ...state, error: '', loading: true };
  case 'LOGIN_SUCCESS':
    return { ...state, ...INITIAL_STATE, user: action.payload };
  case 'LOGIN_FAILURE':
    return { ...state, error: 'Authentication failed', password: '', loading: false };
  default:
    return state;
  }
};
