module.exports = (req, res, next) => {
    const { pass } = req.query;

    if(!pass || pass !== "admin"){
        return res.status(400).json("Inválido.");
    }

    next();
}