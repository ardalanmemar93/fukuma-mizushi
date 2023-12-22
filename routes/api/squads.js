const express = require('express');
const router = express.Router();
const squadsCtrl = require('../../controllers/api/squads');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// POST /api/squads (create a squad)
router.post('/', ensureLoggedIn, squadsCtrl.create);
// GET /api/squads (get all squads for the logged-in user)
router.get('/', ensureLoggedIn, squadsCtrl.getAll);

module.exports = router;