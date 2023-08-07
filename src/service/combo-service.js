const { comboProvider } = require('../provider');

const listAllCombo = async function() {
    return await comboProvider.listAllCombo();
};

const listOneCombo = async(combo_id) => {
    const combo = await comboProvider.listOneCombo(combo_id);
    return combo
};

const createCombo = async (combo) => {
    console.log('SERVICES', combo);
    return await comboProvider.createCombo(combo);
};


const updateCombo = async(combo_Id, updateCombo) => {
    return await comboProvider.updateCombo(combo_Id, updatecombo);
};

const deleteCombo = async (combo_Id) => {
    return await comboProvider.deleteCombo(combo_Id);
};


module.exports = { listAllCombo, listOneCombo, createCombo, updateCombo, deleteCombo };
