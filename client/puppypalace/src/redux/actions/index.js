import axios from "axios";


export function getNameClinic(name) {
  return async function (dispatch) {
    try {
      const responseName = await axios.get(
        `http://localhost:3001/clinics?name=${name}`
      );
      return dispatch({
        type: "GET_CLINIC_NAME",
        payload: responseName.data,
      });
    } catch (error) {
      alert(error);
    }
  };
}


export function getClinics() {
  return async function (dispatch) {
    try {
      const responseClinics = await axios.get("http://localhost:3001/clinics");
      return dispatch({
        type: "GET_CLINICS",
        payload: responseClinics.data,
      });
    } catch {
      return alert("No se encontraron veterinarias");
    }
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      const responseDetail = await axios.get(
        `http://localhost:3001/clinics/${id}`
      );
      return dispatch({
        type: "GET_DETAILS",
        payload: responseDetail.data,
      });
    } catch (error) {
      console.log(error);
    }
}

export function PostUser(payload) {
    return async function(dispatch){
        let user = await axios.post('http://localhost:3001/user/register', payload)
        return user
    }
  };
}

export function cleanDetails() {
  return {
    type: "RESET",
    payload: [],
  };
}

export function filterCity(payload){
  return {
    type: "FILTER_CITY",
    payload,
  }
}