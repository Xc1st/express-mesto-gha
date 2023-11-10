const router = require('express').Router();
const {
  addUser, getUsers, getUserById, editUser, editUserAvatar,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/:userId', getUserById);
router.post('/', addUser);
router.patch('/me', editUser);
router.patch('/me/avatar', editUserAvatar);
module.exports = router;
