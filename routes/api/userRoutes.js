const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// This is for the 'api/users' route.
router.route('/').get(getAllUser).post(createUser);

// This is for the 'api/users/:id' route.
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// This is for the 'api/users/:userid/friends/:friendId' route.
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;