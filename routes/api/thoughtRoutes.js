const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController');

// This is for the 'api/thoughts' route.
router.route('/').get(getAllThought).post(createThought);

// This is for the 'api/thoughts/:id' route.
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

// This is for the 'api/thoughts/:thoughtId/reactions' route.
router.route('/:id/reactions').post(addReaction)

// This is for the 'api/thoughts/:thoughtId/reactions/:reactionId' route.
router.route('/:id/reactions/:reactionId').delete(removeReaction);

module.exports = router;