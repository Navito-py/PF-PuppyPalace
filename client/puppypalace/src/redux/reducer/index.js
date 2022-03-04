const initialState = {
  clinics: [],
  allClinics: [],
  detail: [],
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
      let citiesFiltered = cities;
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
    default:
      return state;
  }
}

export default rootReducer;
