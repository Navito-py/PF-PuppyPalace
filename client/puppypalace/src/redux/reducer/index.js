
const initialState = {
  clinics: [],
  allClinics: [],
  detail: [],
  pets: [],
  token: '',
  user: {},
  allUsers: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CLINICS":
      return {
        ...state,
        clinics: action.payload,
        allClinics: action.payload
      };
    case "GET_DETAILS":
      return {
        ...state,
        detail: action.payload,
      };

      case 'LOST_ID':
        return {
          ...state,
          pets: action.payload
        }

    case "RESET":
      return {
        ...state,
        detail: action.payload,
      };
    case "GET_CLINIC_NAME":
      return {
        ...state,
        clinics: action.payload,
      };
    case "FILTER_CITY":
      const cities = state.allClinics;

      let citiesFiltered;
      if (action.payload === "mendoza") {
        citiesFiltered = cities.filter((e) => e.city === "Mendoza");
      } else if (action.payload === "rosario") {
        citiesFiltered = cities.filter((e) => e.city === "Rosario");
      } else {
        citiesFiltered = cities.filter((e) => e.city === "Córdoba");
      }
      return {
        ...state,
        clinics: citiesFiltered,
      };

      case "GET_PETS":
        return{
          ...state,
          pets: action.payload,
        };
      case "LOGIN_ANSWER":
        localStorage.setItem('token', action.payload.accessToken)
        return{
          ...state,
          token: action.payload.accessToken

        }
      case "GET_USER_PROFILE":
        return {
          ...state,
          user: action.payload
        }  

        case "LOGIN_FROM_STORAGE":
          return{
              ...state,
              token: action.payload
            }
        case "RESET_STATUS":
          return{
            state : initialState
          }
        case "GET_USERS":
          return{
            ...state,
            allUsers: action.payload
          }
      

    default:
      return state;
  }
}

export default rootReducer;
