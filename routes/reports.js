"use strict";
const router = require('express').Router();
const reportController = require('../controllers/addReport');
router.route('/add')
    .post(reportController.addReport);
module.exports = router;
