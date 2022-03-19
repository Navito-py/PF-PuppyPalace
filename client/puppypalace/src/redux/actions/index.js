import axios from "axios";

export function getNameClinic(name) {
  return async function (dispatch) {
    try {
      const responseName = await axios.get(
        `https://vipets.herokuapp.com/clinics?name=${name}`
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
      const responseClinics = await axios.get("https://vipets.herokuapp.com/clinics", {
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
        `https://vipets.herokuapp.com/clinics/${id}`
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
      const lostDetail = await axios.get(`https://vipets.herokuapp.com/user/pets/${id}`)
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
      let user = await axios.post('https://vipets.herokuapp.com/user/register', payload)
      return user.data
  }
};

export function postLogin(payload){
  return async function(dispatch){
    let login = await axios.post('https://vipets.herokuapp.com/user/login', payload)
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
   const pets = await axios.get("https://vipets.herokuapp.com/user/pets", {
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
    let pet = await axios.post('https://vipets.herokuapp.com/user/pets', payload, {
      headers:{
        'authorization': `Bearer ${token}`
      }
     });
    return pet
  }
}

export function ReserveSubmit (payload){
  return async function(dispatch){
    let reserve = await axios.post('https://vipets.herokuapp.com/clinics/reserve', payload)
    return reserve
  }
}

export function getProfile (accesstoken){
  return async function (dispatch){
    let user= await axios.get('https://vipets.herokuapp.com/user/profile', {
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
    let deletedClinic = await axios.delete(`https://vipets.herokuapp.com/admin/clinics/delete/${id}`, {
      headers:{
        'authorization': `Bearer ${token}`
      }
    })
    return deletedClinic
  }
}

export function addClinic(payload, token) {
  return async function(dispatch){
    let newClinic = await axios.post(`https://vipets.herokuapp.com/admin/clinics/create`, payload, {
      headers:{
        'authorization': `Bearer ${token}`
      }
    })
    if(newClinic.data){
      alert('Clinica creada correctamente')
    }
    
  }

}

export function getAllUsers(token){
  return async function(dispatch){
    let allusers = await axios.get(`https://vipets.herokuapp.com/admin/users`, {
      headers:{
        'authorization': `Bearer ${token}`
      }
    })
    if(allusers){
        return dispatch({
        type: "GET_USERS",
        payload: allusers.data,
      });
    }else{
      alert('No se encontraron usuarios')
    }
  }
}

export function deleteUser(id, token){
  return async function(dispatch){
    let DeleteUser = await axios.delete(`https://vipets.herokuapp.com/admin/users/${id}`, {
      headers:{
        'authorization': `Bearer ${token}`
      }
    })
    if(deleteUser){
      alert('Usuario eliminado correctamente')
    }
  }
}

export function adminAUser(id, token){
  return async function(dispatch){
    let user = await axios.get(`https://vipets.herokuapp.com/admin/users/${id}`, {
      headers:{
        'authorization': `Bearer ${token}`
      }
    })
    if(user){
      if(user.isAdmin === false){
        user.isAdmin = true
        let newuser = await axios.put(`https://vipets.herokuapp.com/admin/users/${id}`, user, {
          headers:{
            'authorization': `Bearer ${token}`
          }
        })
        if(newuser){alert('Se modificarlos los derechos correctamente')}
      }else if(user.isAdmin === true){
        user.isAdmin = false
        let newuser2 = await axios.put(`https://vipets.herokuapp.com/admin/users/${id}`, user, {
          headers:{
            'authorization': `Bearer ${token}`
          }
        })
        if(newuser2){alert('Se modificarlos los derechos correctamente')}
      }
    }else{
      alert('Error')
    }
  }
}