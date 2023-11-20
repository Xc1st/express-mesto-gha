const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const urlRegex = require('../utils/constants');
const {
  getUsers, getUserById, editUser, editUserAvatar, getMeUser,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/me', getMeUser);

router.get('/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().length(24).hex().required(),
  }),
}), getUserById);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
  }),
}), editUser);

router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().pattern(urlRegex),
  }),
}), editUserAvatar);

router.get('/:userId', getUserById);
router.patch('/me', editUser);
router.patch('/me/avatar', editUserAvatar);
module.exports = router;
