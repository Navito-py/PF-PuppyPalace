const { sign } = require("jsonwebtoken");

const clinicas = [
  {
  "name" : "Clinica Veterinaria Dr. Munini",
  "address" : "Paraguay 2773", 
  "province": "Santa Fé" ,
  "city": "Rosario",
  "activeHours": "Lunes a Viernes 8 hs a 20 hs // Sábado 9 a 13 hs",
  "phone" : "3414824562",
  "image" : "https://images.pexels.com/photos/5731866/pexels-photo-5731866.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "emergency": "Atiende Emergencias",
  "hospitalization": "No Posee Hospitalizacion" 
  },
  {
  "name" : "URGENVET VETERINARIO 24 HS",
  "address" : "Cerro Catedral 6099-5901", 
  "province": "Santa Fé" ,
  "city": "Rosario",
  "activeHours": "24 hs",
  "phone" : "341153718992",
  "image" : "https://www.gstatic.com/bfe/apps/website/img/h/3348095-dog-cat-1440.jpg",
  "emergency": "Atiende Emergencias",
  "hospitalization": "Posee Hospitalizacion"
  },
  {
    "name" : "Dr. Balbi Emergencias Veterinarias",
    "address" : "Riccheri 1033", 
    "province": "Santa Fé" ,
    "city": "Rosario",
    "activeHours": "24 hs",
    "phone" : "341155975108",
    "image" : "https://media.istockphoto.com/photos/cat-and-dog-sleeping-puppy-and-kitten-sleep-picture-id1168451046?k=20&m=1168451046&s=612x612&w=0&h=a4HrlTv3ZcEtvKB7JdoZBL4f-EFk8OQdySi4QJaM7_c=",
    "emergency": "Atiende Emergencias",
    "hospitalization": "Posee Hospitalizacion"
  }, 
 
  {
  "name" : "SiVET",
  "address" : "Italia 75", 
  "province": "Santa Fé" ,
  "city": "Rosario",
  "activeHours": "24 hs",
  "phone" : "3414251035",
  "image" : "https://images.pexels.com/photos/1084425/pexels-photo-1084425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "emergency": "Atiende Emergencias",
  "hospitalization": "Posee Hospitalizacion"
  },
 
 {
  "name" : "Mascotas del Oeste",
  "address" : "Bv. Avellaneda 1153",
  "province": "Santa Fé" ,
  "city": "Rosario",
  "activeHours": "Lunes a Viernes 9:30 a 12:30 hs // 16 a 20 hs // Sábado 9 a 13 hs",
  "phone" : "3414226932",
  "image" : "https://images.pexels.com/photos/3631659/pexels-photo-3631659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "emergency": "Atiende Emergencias",
  "hospitalization": "No Posee Hospitalizacion"
  },
 {
  "name" : "Veterinaria San Bernardo",
  "address" : "Bv. Seguí 3506", 
  "province": "Santa Fé" ,
  "city": "Rosario",
  "activeHours": "Lunes a Viernes 9:30 a 13 hs // 17 a 19 hs // Sábado 9 a 13 hs",
  "phone" : "3412419480",
  "image" : "https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "emergency": "Atiende Emergencias",
  "hospitalization": "No Posee Hospitalizacion"
  },
 {
  "name" : "Asistencia Veterinaria",
  "address" : "Av. Sarmiento 905", 
  "province": "Santa Fé" ,
  "city": "Rosario",
  "activeHours": "Lunes a Viernes 9 a 12 hs // 17 a 20 hs // Sábado 9 a 13 hs",
  "phone" : "3413076530",
  "image" : "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "emergency": "Atiende Emergencias",
  "hospitalization": "No Posee Hospitalizacion"
  },
 
 {
  "name" : "Mascota 24",
  "address" : "Dr. Estanislao S. Zeballos 1425", 
  "province": "Santa Fé" ,
  "city": "Rosario",
  "activeHours": "24 hs",
  "phone" : "3414204880",
  "image" : "https://images.pexels.com/photos/6234980/pexels-photo-6234980.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "emergency": "Atiende Emergencias",
  "hospitalization": "Posee Hospitalizacion"
  },
 
{
"name" : "Clínica Veterinaria Francesa",
"address" : "Buenos Aires 373", 
"province": "Mendoza",
"city": "Mendoza",
"activeHours": "Lunes a Viernes 9 a 20 hs // Sábado 9 a 13 hs",
"phone" :  "2614234011",
"image" : "https://media.istockphoto.com/photos/young-happy-veterinary-nurse-smiling-while-playing-with-a-dog-high-picture-id1303362255?b=1&k=20&m=1303362255&s=170667a&w=0&h=ebm7UoUmaCTxepZ9NoyPRTK2WC-5TmTlk6PyXou_NFg=",
"emergency": "Atiende Emergencias",
  "hospitalization": "No Posee Hospitalizacion"
},

 {
  "name" : "Vet House Clínica Veterinaria",
  "address" : "Juan Gualberto Godoy 181", 
  "province": "Mendoza" ,
  "city": "Mendoza",
  "activeHours": "Lunes a Viernes 9 a 19 hs // Sábado 9 a 13 hs",
  "phone" : "2615405474",
  "image" : "https://media.istockphoto.com/photos/image-of-male-doctor-veterinarian-with-stethoscope-is-holding-cute-picture-id1294792706?b=1&k=20&m=1294792706&s=170667a&w=0&h=hq8H-P-omwVecfNPnuECsfXTo33rfKajIK1RRJfP0xs=",
  "emergency": "Atiende Emergencias",
  "hospitalization": "No Posee Hospitalizacion"
  },
 
 {
  "name" : "Veterinaria Mendoza Unimev",
  "address" : "Bernardo Houssay 612", 
  "province": "Mendoza" ,
  "city": "Mendoza",
  "activeHours": "Lunes a Sábado 9:30 a 13:30 hs // 17 a 21 hs",
  "phone" : "02614215216",
  "image": "https://media.istockphoto.com/photos/vet-doctor-examining-labrador-dog-picture-id1303833951?b=1&k=20&m=1303833951&s=170667a&w=0&h=kZOqKof2-6XnBpkFzRqcJTitSu9_4uxmcYXiJp4aXMk=",
  "emergency": "Atiende Emergencias",
  "hospitalization": "No Posee Hospitalizacion"
  },
 
 {
  "name" : "Veterinaria San Roque, Hospital Veterinaria",
  "address" : "Av. Juan B. Justo 535", 
  "province": "Mendoza" ,
  "city": "Mendoza",
  "activeHours": "Lunes a Viernes 9:30 a 20 hs // Sábado 9 a 13 hs",
  "phone" : "2614233937",
  "image" : "https://images.pexels.com/photos/1452717/pexels-photo-1452717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "emergency": "Atiende Emergencias",
  "hospitalization": "No Posee Hospitalizacion"
  },
 
{
"name" : "Arrayanes Centro Veterinario 24hs",
"address" : "Paraná 55", 
"province": "Mendoza" ,
"city": "Mendoza",
"activeHours": "24 hs",
"phone" : "2614246810",
"image" : "https://img.freepik.com/foto-gratis/algunas-vitaminas-cachorros-pequenos_329181-14493.jpg?size=626&ext=jpg",
"emergency": "Atiende Emergencias",
  "hospitalization": "Posee Hospitalizacion"
},

{
  "name" : "HOSPITAL VETERINARIO ANDINO",
  "address" : "Los Carolinos Manzana 16 Casa 7", 
  "province": "Mendoza" ,
  "city": "Mendoza",
  "activeHours": "24 hs",
  "phone" : "2614444396",
  "image" : "https://img.freepik.com/foto-gratis/doctor-llevando-perrito-gris_329181-10394.jpg?size=626&ext=jpg&uid=R60651945",
  "emergency": "Atiende Emergencias",
  "hospitalization": "Posee Hospitalizacion"
  }, 
 {
  "name" : "Veterinaria Dr. de la Torre",
  "address" : "Jorge A. Calle 224", 
  "province": "Mendoza" ,
  "city": "Mendoza",
  "activeHours": "24 hs",
  "phone" : "2614297168",
  "image" : "https://images.pexels.com/photos/1386422/pexels-photo-1386422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "emergency": "Atiende Emergencias",
  "hospitalization": "Posee Hospitalizacion"
  },
 
 {
  "name" : "Clínica Veterinaria Eva Inguerman",
  "address" : "Av. Colón 6200", 
  "province": "Córdoba",
  "city": "Córdoba",
  "activeHours": "24 hs",
  "phone" : "3514326414",
  "image" : "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "emergency": "Atiende Emergencias",
  "hospitalization": "Posee Hospitalizacion"
  },
 
 {
  "name" : "Clínica Veterinaria Colón ",
  "address" : "Duarte Quirós 5275", 
  "province": "Córdoba",
  "city": "Córdoba",
  "activeHours": "Lunes a Viernes de 9:30 a 12:30 hs // 17 a 20 hs// Sábado 9 a 13 hs",
  "phone" : "3514842227",
  "image" : "https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "emergency": "Atiende Emergencias",
  "hospitalization": "No Posee Hospitalizacion"
  },
 
 {
  "name" : "Clínica Veterinaria Córdoba Ser-Vet",
  "address" : "Av. Dr Arturo Capdevilla 2087", 
  "province": "Córdoba",
  "city": "Córdoba",
  "activeHours": "Lunes a Viernes de 9:30 js // 17 a 20 hs hs // // Sábado 9 a 13 hs",
  "phone" : "3514791679",
  "image" : "https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "emergency": "Atiende Emergencias",
  "hospitalization": "No Posee Hospitalizacion"
  },
 
 {
  "name" : "Clínica Veterinaria Albeytor",
  "address" : "Av Patria 304", 
  "province": "Córdoba",
  "city": "Córdoba",
  "activeHours": "Lunes a Viernes 9:30 a 12:30 hs // 17 a 20 hs // Sábado 9 a 13 hs",
  "phone" : "3517631416",
  "image" : "https://images.pexels.com/photos/160755/kittens-cats-foster-playing-160755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "emergency": "Atiende Emergencias",
  "hospitalization": "No Posee Hospitalizacion"
 },
 
 {
  "name" : "Bicho's Clínica Veterinaria",
  "address" : "Av. Fuerza Aérea Argentina 2949", 
  "province": "Córdoba",
  "city": "Córdoba",
  "activeHours": "Lunes a Viernes 9:30 a 12:30 hs // 17 a 20 hs // Sábado 9 a 13 hs",
  "phone" : "3514658784",
   "image" : "https://images.pexels.com/photos/1938123/pexels-photo-1938123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "emergency": "Atiende Emergencias",
   "hospitalization": "No Posee Hospitalizacion"
  },

  {
    "name" : "Veterinaria EIKOS Urgencias 24HS",
    "address" : "Bv. Los Granaderos 3170", 
    "province": "Córdoba",
    "city": "Córdoba",
    "activeHours": "24 hs",
    "phone" :  "3513651916",
    "image" : "https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "emergency": "Atiende Emergencias",
    "hospitalization": "Posee Hospitalizacion"
    },
     
    {
    "name" : "Hospital Veterinario Córdoba",
    "address" : "Fructuoso Rivera 35", 
    "province": "Córdoba",
    "city": "Córdoba",
    "activeHours": "24 hs",
    "phone" :  "3514282426",
    "image" : "https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "emergency": "Atiende Emergencias",
    "hospitalization": "Posee Hospitalizacion"
    }
 ];
 
   module.exports = {clinicas};