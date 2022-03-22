const {User, Pet, Vaccine, Reserve, Visit} = require ('../db.js');
const {isAuthUser} = require('../Utils/isAuth.js');

const admindGetProfile = async (req, res, next) => {
    //const user = isAuthUser(req);

    const user = await User.findAll( {
        include:[{model: Pet}, {model: Reserve}] 
    });
    res.json(user);
}

const adminGetProfileId = async (req, res) => {
    try {
        const id = req.params.id;
        const idUser = await User.findByPk(id, {
            include:[{model: Pet}, {model: Reserve}, {model: Visit}] 
        });
        if(!idUser) {
            res.status(404).send("No hay usuario con ese ID")
        }
        res.status(200).json(idUser)
    } catch (error) {
        res.status(404).send(error)
    }
}

//---------------------------------------------PUT----------------------------------------------------

const admindModProfile = async (req, res) => {
    let { id } = req.params;
    let {
        isAdmin
    } = req.body;
    
    try {
        const adminModifiedProfile = await User.update({
            isAdmin,
        },
        {
            where: { id }
        });
        res.status(200).json(adminModifiedProfile);
    } catch (e) {
        console.log(e)
        res.status(400).send(e);
    };
};

const adminKillUser = async (req, res) => {
    let { id } = req.params
    await User.destroy({
        where: { id }
    })
    res.status(200).send("fuiste eliminado por gato");
} ;


module.exports = {
    admindGetProfile,
    adminGetProfileId,
    admindModProfile,
    adminKillUser,
}