const { User, Clinic, Visit, visit_clinic } = require('../db.js');
const { isAuthUser } = require('../Utils/isAuth.js');

// ---------------------------- Funciones ---------------------------- \\

const reviews = async() => {
    return await Visit.findAll()
};

const reviewId = async(id) => {
    try {
        const idReview = await Visit.findByPk(id);
        return idReview;
    } catch (error) {
        console.log(error);
        return res.status(404).send(error);
    };
};

// ------------------------------ Rutas ------------------------------ \\

const getReview = async (req, res) => {
    try {
        const review = reviews()
        return res.status(200).json(review)
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
    };
};

const getReviewId = async (req, res) => {
    try {
        const { id } = req.params;
        const idDetails = await reviewId(id);
        if(!idDetails) {
            return res.status(404).send("No hay Reseñas con ese id");
        }
        res.status(200).json(idDetails);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
    };
};

const postReview = async (req, res) => {
    let { id } = req.params;
    let {
        review,
        score,
        clinicId
    } = req.body;

    try {
        if(review, score) {
            let newReview = await Visit.create({
                review,
                score,
                clinicId: id
            })

            const userId = isAuthUser(req);
            const user = await User.findByPk(userId);

            const clinic = await Clinic.findByPk(id);

            await user.addVisit(newReview);
            await newReview.setUser(user);

            await clinic.addVisit(newReview);
            await newReview.setClinic(clinic);

            res.status(201).json(newReview);
        } else {
            res.status(401).send({error: "Por favor complete los tres campos: Fecha, Reseña y Puntuación(1-5)"})
        }
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    };
};

const modReview = async (req, res) => {
    let { id } = req.params;
    let { 
        review,
        score
    } = req.body;

    try {
        const modifiedReview = await Visit.update({
            review,
            score
        },
        {
            where: { id }
        });
        res.status(200).json(modifiedReview);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    };
};

const killReview = async (req, res) => {
    let { id } = req.params;
    await Visit.destroy({
        where: { id }
    });
    res.status(200).send("Reseña Eliminada")
};

module.exports = {
    getReview,
    getReviewId,
    postReview,
    modReview,
    killReview
}