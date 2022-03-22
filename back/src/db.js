require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;


let sequelize = process.env.NODE_ENV === 'production'
? new Sequelize({
  database: DB_NAME,
  dialect: 'postgres',
  host: DB_HOST,
  port: 5432,
  username: DB_USER,
  password: DB_PASSWORD,
  pool: {
    max: 3,
    MIN: 1,
    idle: 10000,
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
    keepAlive: true,
  },
  ssl: true,
})
: new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false, native: false }
);

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/vipets`, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { Pet, User, Clinic, Rate, Vaccine, Visit, Reserve } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
User.belongsToMany(Pet, {through: 'user_pet'});
Pet.hasOne(User, {through: 'user_pet'});

Pet.belongsToMany(Vaccine, {through: 'pet_vaccine'});
Vaccine.belongsToMany(Pet, {through: 'pet_vaccine'});

User.belongsToMany(Reserve, {through: 'user_reserve'});
Reserve.hasOne(User, {through: 'user_reserve'});
Reserve.hasOne(Clinic, {through: 'clinic_reserve'});
Clinic.belongsToMany(Reserve, {through: 'clinic_reserve'});

User.belongsToMany(Visit, {through: 'user_visit'});
Visit.hasOne(User, {through: 'user_visit'});
Clinic.belongsToMany(Visit, {through: 'visit_clinic'});
Visit.hasOne(Clinic, {through: 'visit_clinic'});

// User.belongsToMany(Clinic, {through: Visit});
// Clinic.belongsToMany(User, {through: Visit});
// User.belongsToMany(Clinic, {through: Reserve});
// Clinic.belongsToMany(User, {through: Reserve});



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
