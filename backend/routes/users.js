const express = require("express");
const router = express.Router();

const { ensureCorrectUser, authRequired } = require("../middleware/auth");

const User = require("../models/user");
const { validate } = require("jsonschema");

const { userNew, userUpdate, userAuth } = require('../schemas/index');

const createToken = require('../helpers/createToken');

router.get('/', async function(req, res, next) {
    try{
        const users = User.findAll();
        return res.json({users});
    }catch(e) {
        return next(e)
    };
});

router.get("/:username", async function(req, res, next) {
    try {
      const user = await User.findOne(req.params.username);
      return res.json({ user });
    } catch (err) {
      return next(err);
    }
  });

router.post("/", async function(req, res, next) {
    try {
        delete req.body._token;
        const validation = validate(req.body, userNew);

        if (!validation.valid) {
        return next({
            status: 400,
            message: validation.errors.map(e => e.stack)
        });
        };

        const newUser = await User.register(req.body);
        const token = createToken(newUser);
        newUser._token = token
        return res.status(201).json(newUser);
    } catch (e) {
            return next(e);
};
});

router.post('/login', async function(req, res, next){
  try{
    const isValid = validate(req.body, userAuth);

    if(!isValid.valid){
      return next({
        status: 400,
        message: validation.errors.map(e => e.stack)
      });
    };

    const user = await User.authenticate(req.body);
    const token = createToken(user);
    user._token = token;

    return res.status(200).json(user)

  }catch(e){
    return next(e)
  };
});

router.patch("/:username", ensureCorrectUser, async function(req, res, next) {
    try {
      if ("username" in req.body || "is_admin" in req.body) {
        return next({ status: 400, message: "Not allowed" });
      }
      await User.authenticate({
        username: req.params.username,
        password: req.body.password
      });
      let user = req.body;
      delete user._token
      const validation = validate(user, userUpdate);
      if (!validation.valid) {
        return next({
          status: 400,
          message: validation.errors.map(e => e.stack)
        });
      }
      
      user._token = req.body._token

      user = await User.update(req.params.username, req.body);
      return res.json({ user });
    } catch (err) {
      return next(err);
    }
});

router.delete("/:username", ensureCorrectUser, async function(req, res, next) {
    try {
      await User.remove(req.params.username);
      return res.json({ message: "User deleted" });
    } catch (err) {
      return next(err);
    }
  });
  
  module.exports = router;