
const initialState = {
  clinics: [],
  allClinics: [],
  detail: [],
  pets: [],
  token: '',

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
        return{
          ...state,
          token: action.payload.accessToken

        }
      

    default:
      return state;
  }
}

export default rootReducer;
