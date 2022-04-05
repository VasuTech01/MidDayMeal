const express = require('express');
const student = require('../models/student');
const router = express.Router();
const { body, validationResult } = require('express-validator');
