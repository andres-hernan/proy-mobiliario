const { comboModel } = require('../model');

const listAllCombo = async function() {
    try {
        const combos = await comboModel.findAll()
        return combos;
    } catch (err) {
        console.error('Error when fetching combo', err);
        throw err;
    }
};

const listOneCombo = async (combo_id, req) => {
    try {
        const id = req.params.combo_id
        const combo = await comboModel.findOne({combo_id,
            where: {
                combo_id: id,
            }
        })
        return combo;
    } catch (err) {
        console.error('Error when fetching combo', err);
        throw err;
    }
};

const createCombo = async (combo) => {
    try {  
        console.log("PROVIDER", combo);
        const newCombo = await comboModel.create({         
            combo_name: combo.combo_name,
            combo_image: combo.combo_image,
        })
        return newCombo;
    } catch (err) {
        console.error('Error when creating combo', err);
        throw err;
    }
};

const updateCombo = async (combo_id) => {
    try {
        const id = req.params.combo_id;
        const datacombos = req.body;
        const createCombo = await Combo.create({
            combo_name: datacombos.combo_name,
            combo_price: datacombos.combo_price,
            comboFk_categoria: datacombos.comboFk_categoria,
            combo_image: datacombos.combo_image,
            comboFk_categoria: datacombo.comboFk_categoria,

            where: {
                combo_id: id
            }
        })
    } catch (err) {
        console.error('Error when updating combo', err);
        throw err;
    }
};

const deleteCombo = async (combo_id) => {
    try {
        const id = req.params.combo_id;
        const deleteCombo = await Combos.destroy({
            where: {
                combo_id: id
            },
        });
    } catch (err) {
        console.error('Error when deleting combo', err);
        throw err;
    }
};

module.exports = { listAllCombo, listOneCombo, createCombo, updateCombo, deleteCombo };
