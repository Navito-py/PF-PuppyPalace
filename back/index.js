const server = require('./src/app.js');
const { Clinic, Pet, User } = require("./src/db.js");
const { conn } = require('./src/db.js');
const { clinicas } = require("./objectsClinics.js");
const { pets } = require('./objectsPets.js');
const { users } = require('./Admin.js');

const eraseDataBase = true;

// Syncing all the models at once.
conn.sync({ force: eraseDataBase }).then(() => {

  if(eraseDataBase){
    createClinics();
    createPets();
    createUsers();
  }

  server.listen(process.env.PORT, () => {
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

const createPets = async () => {
  try {
    await Pet.bulkCreate(pets);
  } catch (error) {
    console.log(error);
    return (error);
  }
}

const createUsers = async () => {
  try {
    await User.bulkCreate(users);
  } catch (error) {
    console.log(error);
    return (error);
  }
}
