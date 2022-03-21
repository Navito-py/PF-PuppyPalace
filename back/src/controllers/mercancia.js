const express = require ("express");
const { MP_TOKEN } = process.env;
//const app = express()
//import mercadopago from "mercadopago";
const mercadopago = require("mercadopago")
 const prueba = async (req, res) =>{
    //TEST-5736859326855984-030919-3068332c358350e3d695e7b80420eefc-1087039959 token del vendedor
    //APP_USR-3022421413110459-031119-f130ca07c75249aa9792eb6c277fd3c8-1087535925
    mercadopago.configure({
        access_token: `${MP_TOKEN}`
    });

    var preference = {
     // client_id:1088678026,
      items: [
        {
          title: 'consulta',
          quantity: 1,
          currency_id: 'ARS',
          unit_price: 1000
        }
      ],
      notification_url:"http://localhost:3001/"
    };

    mercadopago.preferences.create(preference)
    .then((r)=>{
       res.json(r)
    }) 

    .catch((e)=>{
        console.log("error" + e)
    })
 
}


 const notificacionprueba = async (req, res) =>{
    const datos = req.query;

    res.json(datos)

    res.status(200)
}

module.exports = {prueba, notificacionprueba};


//usarios de prueba 

/*{
    "id": 1088684070,
    "nickname": "TETE5137588",
    "password": "qatest8178",
    "site_status": "active",
    "email": "test_user_61848221@testuser.com"
}

{
    "id": 1088678026,
    "nickname": "TETE5089007",
    "password": "qatest9216",
    "site_status": "active",
    "email": "test_user_53541193@testuser.com"
}
{
  "id": 1093413326,
  "nickname": "TETE1699534",
  "password": "qatest3367",
  "site_status": "active",
  "email": "test_user_84692689@testuser.com"
}

Tarjetas de prueba
Tarjeta	Número	Código de seguridad	Fecha de vencimiento
Mastercard	5031 7557 3453 0604	123	11/25
Visa	4509 9535 6623 3704	123	11/25
American Express	3711 803032 57522	1234	11/25

Para probar distintos resultados de pago, completa el estado deseado en el nombre del titular de la tarjeta:
Estado de pago	Descripción
APRO	Pago aprobado
CONT	Pago pendiente
OTHE	Rechazado por error general
CALL	Rechazado con validación para autorizar
FUND	Rechazado por monto insuficiente
SECU	Rechazado por código de seguridad inválido
EXPI	Rechazado por problema con la fecha de expiración
FORM	Rechazado por error en formulario
*/