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
}

export function getLostDetail(id){
  return async function (dispatch){
    try {
      const lostDetail = await axios.get(`http://localhost:3001/user/pets/${id}`)
      return dispatch({
        type: 'LOST_ID',
        payload: lostDetail.data
      });
    } catch(error){
      console.log(error)
    }
  }
}

export function postUser(payload) {
  return async function(){
      let user = await axios.post('http://localhost:3001/user/register', payload)
      return user.data
  }
};

export function postLogin(payload){
  return async function(dispatch){
    let login = await axios.post('http://localhost:3001/user/login', payload)
    if(login.data){
      alert('Iniciaste sesion con exito!')
      return dispatch(
        {
          type: "LOGIN_ANSWER",
          payload: login.data
        })
      }
  }
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

export function getPets(){
  return async function(dispatch){
   const pets = await axios.get("http://localhost:3001/user/pets")
   return dispatch({
     type: "GET_PETS",
     payload: pets.data,
   })
  }
}

export function PetSubmit (payload){
  return async function(dispatch){
    let pet = await axios.post('http://localhost:3001/user/pets', payload)
    return pet
  }
}

export function ReserveSubmit (payload){
  return async function(dispatch){
    let reserve = await axios.post('http://localhost:3001/clinics/reserve', payload)
    return reserve
  }
}


