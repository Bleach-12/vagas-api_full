const Vaga = require('../models/Vaga');

exports.createVaga = async (req, res) => {
    try {
        const vaga = await Vaga.create(req.body);
        res.status(201).json(vaga);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getVagas = async (req, res) => {
    try {
        const vagas = await Vaga.findAll({ attributes: ['id', 'titulo'] });
        res.status(200).json(vagas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getVagaById = async (req, res) => {
    try {
        const vaga = await Vaga.findByPk(req.params.id);
        if (vaga) {
            res.status(200).json(vaga);
        } else {
            res.status(404).json({ message: 'Vaga não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateVaga = async (req, res) => {
    try {
        const vaga = await Vaga.findByPk(req.params.id);
        if (vaga) {
            await vaga.update(req.body);
            res.status(200).json(vaga);
        } else {
            res.status(404).json({ message: 'Vaga não encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteVaga = async (req, res) => {
    try {
        const vaga = await Vaga.findByPk(req.params.id);
        if (vaga) {
            await vaga.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Vaga não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getVagasByCargo = async (req, res) => {
    try {
        const vagas = await Vaga.findAll({ where: { cargo: req.params.cargo } });
        res.status(200).json(vagas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getVagasByCidade = async (req, res) => {
    try {
        const vagas = await Vaga.findAll({ where: { cidade: req.params.cidade } });
        res.status(200).json(vagas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
