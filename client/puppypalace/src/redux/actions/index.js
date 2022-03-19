import axios from "axios";
const url = "http://localhost:3001";
const url2 = "https://vipets.herokuapp.com";

export function getNameClinic(name) {
  return async function (dispatch) {
    try {
      const responseName = await axios.get(
        `${url2}/clinics?name=${name}`
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


export function getClinics(token) {
  return async function (dispatch) {
    try {
      const responseClinics = await axios.get(`${url2}/clinics`, {
        headers:{
          'Authorization': `Bearer ${token}`
        }
      });
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
        `${url2}/clinics/${id}`
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
      const lostDetail = await axios.get(`${url2}/user/pets/${id}`)
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
      let user = await axios.post( `${url2}/user/register`, payload)
      return user.data
  }
};

export function postLogin(payload){
  return async function(dispatch){
    let login = await axios.post( `${url2}/user/login` , payload)
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

export function getPets(token){
  return async function(dispatch){
   const pets = await axios.get(`${url2}/user/pets`, {
    headers:{
      'authorization': `Bearer ${token}`
    }
   })
   return dispatch({
     type: "GET_PETS",
     payload: pets.data,
   })
  }
}

export function PetSubmit (payload, token){
  return async function(dispatch){
    let pet = await axios.post(`${url2}/user/pets `, payload, {
      headers:{
        'authorization': `Bearer ${token}`
      }
     });
    return pet
  }
}

export function ReserveSubmit (payload){
  return async function(dispatch){
    let reserve = await axios.post( `${url2}/clinics/reserve`, payload)
    return reserve
  }
}

export function getProfile (accesstoken){
  return async function (dispatch){
    let user= await axios.get( `${url2}/user/profile`, {
      headers:{
        'authorization': `Bearer ${accesstoken}`
      } 
  });
  
  return dispatch ({
    type: "GET_USER_PROFILE",
    payload: user.data 
  })
  }
};

export function getLoginFromStorage(payload){
  return async function(dispatch){
      return dispatch(
        {
          type: "LOGIN_FROM_STORAGE",
          payload
        })
      }
  }

export function resetStatus() {
  return {
    type: "RESET_STATUS",
    payload: null,
  };
}

export function DeleteClinic(id, token){
  return async function(dispatch){
    let deletedClinic = await axios.delete(`${url2}/admin/clinics/delete/${id}`, {
      headers:{
        'authorization': `Bearer ${token}`
      }
    })
    return deletedClinic
  }
}

export function addClinic(payload, token) {
  return async function(dispatch){
    let newClinic = await axios.post(`${url2}/admin/clinics/create`, payload, {
      headers:{
        'authorization': `Bearer ${token}`
      }
    })
    if(newClinic.data){
      alert('Clinica creada correctamente')
    }
    
  }

}