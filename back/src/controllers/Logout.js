const {User, Pet, Vaccine}= require ('../db.js');

const logout = async (req, res, next) => {
    res.clearCookie('refreshToken');
    return res.send({
        message: 'Logged out',
    })
}


module.exports ={ logout };