const { comboService } = require ("../service")

const listAllCombo = async function(req, res) {
    try {
    const combo = await comboService.listAllCombo()
    res.json(combo);
    }catch (err) {
        res.status(500).json({ action: "listAllCombo", error: err.message });
    }
};

const listOneCombo = async (req, res) => {
    try {
        const combo_id = req.params.combo_id;
        const combo = await comboService.listOneCombo(combo_id, req);
       
    } catch (err) {
        res.status(500).json({ action: "listOneCombo", error: err.message });
    }
    
};

const createCombo = async function (req, res) {
    const { combo_name, combo_image } = req.body;
  
    try {
      const newCombo = await comboService.createCombo(req.body);
      res.status(201).json(newCombo);
    } catch (error) {
      res.status(500).json({ error: 'Unable to create combo.' });
    }
  }

const updateCombo = async (req, res) => {
    try {
        const comboUpdate = await comboService.updatecombo(req.params.combo_id, req.body);
        res.json(comboUpdate);
    } catch (err) {
        res.status(500).json({ action: 'updateCombo', error: err.message});
    }
};

const deleteCombo = async (req, res) => {
    try { 
        await comboService.deleteCombo(req.params.combo_id);
        res.json({message: 'Combo deleted successfully'})
    } catch (err) {
        res.status(500).json({ action: 'deleteCombo', error: err.message});
    }
};



module.exports = { listAllCombo, listOneCombo, createCombo, updateCombo, deleteCombo };
