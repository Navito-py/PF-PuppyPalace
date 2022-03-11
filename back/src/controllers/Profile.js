const {User, Pet, Vaccine, Reserve} = require ('../db.js');
const {isAuthUser} = require('../Utils/isAuth.js');

const getProfile = async (req, res, next) => {
    const userId = isAuthUser(req);

    const user = await User.findByPk(userId, {
        include:[{model: Pet}, {model: Reserve}] 
    });

    res.json(user);


}


module.exports = {
    getProfile
}