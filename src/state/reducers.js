import * as types from"./actionTypes";


const initialLoginFormState = {
  email: "",
  password: "",
  isSubmitting: false
};

export function loginFormReducer(state = initialLoginFormState, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...state,
        [action.payload[0]]: action.payload[1]
      };
    case types.LOGIN_START:
      return {
        ...state,
        isSubmitting: true
      };
    case types.LOGIN_END:
      return {
        ...state,
        isSubmitting: false
      };
    default:
      return state;
  }
}

const initialRegisterFormState = {
  firstname: "",
  lastname: "",
  email:"",
  password: "",
  isSubmitting: false
};
export function signupFormReducer(state = initialRegisterFormState, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...state,
        [action.payload[0]]: action.payload[1]
      };
    case types.REGISTER_START:
      return {
        ...state,
        isSubmitting: true
      };
    case types.REGISTER_END:
      return {
        ...state,
        isSubmitting: false
      };
    default:
      return state;
  }
}

const advertFormState = {
dashboard: {
  clicks: 0,
  show: true,
  advertName: '',
  websiteUrl: '',
  country: '',
  tags: '',
  days: '',
  date: '',
  dateString: '',
}};

export const addadvertformReducer = (state = advertFormState, action) => {
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...state,
        [action.payload.inputName]: action.payload.inputValue
      };
      case types.POST_ADVERTS_SUCCESS:
        return {
          ...state,
          isFetching:false,
          items: action.payload,
          error: ''
        };
        case types.POST_ADVERTS_FAILURE:
        return {
          ...state,
          isFetching:false,
          error:action.payload
        }
    }
}