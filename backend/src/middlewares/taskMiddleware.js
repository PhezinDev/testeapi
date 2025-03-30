const validateFieldTitle = (req, res, next) => {
    const { body } = req
    if(body.title === undefined) {
        res.status(400).json({msg: "O campo title é obrigatorio"})
    }
    if(body.title === '') {
        res.status(400).json({msg: "O campo title não pode ser vazio"})
    }

    next()
}

const validateFieldStatus = (req, res, next) => {
    const { body } = req
    if(body.status === undefined) {
        res.status(400).json({msg: "O campo status é obrigatorio"})
    }
    if(body.status === '') {
        res.status(400).json({msg: "O campo status não pode ser vazio"})
    }

    next()
}

module.exports = {
    validateFieldTitle,
    validateFieldStatus,
}