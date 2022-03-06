const server = require('./src/app.js');
const {Clinic} = require("./src/db.js");
const { conn } = require('./src/db.js');
const {clinicas} = require("./objectsClinics.js");


const eraseDataBase = true;


// Syncing all the models at once.
conn.sync({ force: eraseDataBase }).then(() => {

  if(eraseDataBase){
    createClinics();
  }

  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});


const createClinics = async () =>{
  try {
    await Clinic.bulkCreate(clinicas);
  } catch (error){
    console.log(error);
    return (error);
  }
}
