const express = require('express');
const School = require('../models/School');
const router = express.Router();
const { body, validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const fetchuser = require('../middleware/fetchuser');

// const JWT_SECRET = "Garvitisagoodb$oy";

// Route 1: Register a school using: POST "/api/auth/register. No Login requiured

router.post('/register', [
    body('affiliateNo', 'Name too short').isLength({ min: 3 }),
    body('name', 'Name too short').isLength({ min: 3 })
],  async (req, res) => {
  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
  //Check whether the school with this affiliate number already exists.
  try {
      let alreadyRegistered = await School.findOne({affiliateNo: req.body.affiliateNo});

      if (alreadyRegistered) {
        return res.status(400).json({ error: "The school is already registered. Please login to continue." });
      }

      school = await School.create({
        affiliateNo: req.body.affiliateNo,
        name: req.body.name,
        location: req.body.location,
        district: req.body.district,
        tehsil: req.body.tehsil,
        state: req.body.state,
        pincode: req.body.pincode,
        board: req.body.board,
      })

      // const data = {
      //   user:{
      //     id:user.id
      //   }
      // }
      
    //   const authtoken = jwt.sign(data, JWT_SECRET);
    //   // console.log(jwtData);
    //   res.json({authtoken});
      res.json({created:school});
      
    } catch (error) {
      res.error(error.message);
      res.status(500).send("Internal Server Error...");
    }
  
  })

// Route 2: Create an account for registered school using: POST "/api/auth/createaccount. No Login requiured

router.post('/createaccount', [
  body('affiliateNo', 'Name too short').isLength({ min: 3 }),
  body('password', 'Please set a strong password').isLength({ min: 3 })
],  async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

//Check whether the school with this affiliate number already exists.
try {
    let RegisteredSchool = await School.updateOne({affiliateNo: req.body.affiliateNo}, {password: req.body.password});

    res.send("Account created successfully");
    
  } catch (error) {
    res.error(error.message);
    res.status(500).send("Internal Server Error...");
  }

})

// Route 3: Login into the account, using: POST "/api/auth/login". No Login requiured

router.post('/login', [
  // body('affiliateNo', 'Invalid email').isEmail(),
  body('password', 'Please enter password').exists()
], async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    let school = await School.findOne({affiliateNo: req.body.affiliateNo}); // findOne takes an Object.
    if(!school){
      return res.status(400).json({error:"Please enter valid credentials"});
    }

    if(req.body.password != school.password){
      return res.status(400).json({error: "Please enter valid credentials"});
    }
    res.json({school:school})

  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error...");
  }

})

  module.exports = router