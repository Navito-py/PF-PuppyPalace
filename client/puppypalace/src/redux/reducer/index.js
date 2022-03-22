const initialState = {
  clinics: [],
  allClinics: [],
  detail: [],
  pets: [],
  token: "",
  user: {},
  allUsers: [],
  allUsers2: [],
  reserves: [],
  paypal: {}
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CLINICS":
      return {
        ...state,
        clinics: action.payload,
        allClinics: action.payload,
      };
    case "GET_DETAILS":
      return {
        ...state,
        detail: action.payload,
      };

    case "LOST_ID":
      return {
        ...state,
        pets: action.payload,
      };

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
      return {
        ...state,
        pets: action.payload,
      };
    case "LOGIN_ANSWER":
      sessionStorage.setItem("token", action.payload.accessToken);
      return {
        ...state,
        token: action.payload.accessToken,
      };
    case "GET_USER_PROFILE":
      console.log(action.payload)
      return {
        ...state,
        user: action.payload,
      };

    case "LOGIN_FROM_STORAGE":
      return {
        ...state,
        token: action.payload,
      };
    case "RESET_STATUS":
      return {
        ...state,
        token:'',
        user:{},
        reserves: []
      };
    case "GET_USERS":
      return {
        ...state,
        allUsers: action.payload,
        allUsers2: action.payload,
      };
    case "RESERVE_ID":
      return {
        ...state,
        reserves: action.payload,
      };
    case "POST_RESERVE":
      return {
        ...state,
        /* reserves: action.payload, */
      };
    case 'SEARCH_BY_USERNAME':
      const allusersfilted = state.allUsers2
      const namefilted = action.payload === ''? allusersfilted : 
      allusersfilted.filter(e => e.userName.toLowerCase().includes(action.payload.toLowerCase()))
      return{
        ...state,
        allUsers: namefilted
      }

    case 'FILTER_ADMIN_CLINICS':
      const allClinicsFilter = state.allClinics
      const clinicfilted = action.payload === ''? allClinicsFilter : 
      allClinicsFilter.filter(e => e.name.toLowerCase().includes(action.payload.toLowerCase()))
      return{
        ...state,
        clinics: clinicfilted
      }
    case 'GET_PAYMENT_REDIR':
      console.log(action.payload)
      return {
        ...state,
        paypal: action.payload
      }
    default:
      return state;
  }
}

export default rootReducer;
