require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
    DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/VIPets`, {
    logging: false,
    native: false
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Con las siguientes lineas leemos todos los archivos de la carpeta Models, los Requerimos y los agregamos al arreglo modelDefiners \\
fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')) // el (-3) representa los ultimos tres caracteres del archivo \\
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '/models', file))); // Aca le digo que a cada uno de los archivos los pushee al arreglo modelDefiners \\
    });

// En la siguiente linea conectamos sequelize a los modelos \\
modelDefiners.forEach(m => m(sequelize));

// En las siguientes lineas requerimos todos los modelos y capitalizamos (ponemos en mayusculas) la inicial del nombre del modelo/tabla en la DB \\
let 