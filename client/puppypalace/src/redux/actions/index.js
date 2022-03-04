import axios from 'axios';

export function getNameClinic(name) {
 
}

export function getClinics(){
    return async function(dispatch) {
        try {
            const responseClinics = await axios.get("http://localhost:3001/clinics")
            return dispatch({
                type: "GET_CLINICS",
                payload: responseClinics.data
            })
        } catch {
            return alert("No se encontraron veterinarias")
        }
    }
}

export function getDetail(id){
    return async function (dispatch){
        try{
            const responseDetail = await axios.get(`http://localhost:3001/clinics/${id}`)
            return dispatch({
                type: "GET_DETAILS",
                payload: responseDetail.data
            })
        } catch(error){
            console.log(error)
        }
    }
}