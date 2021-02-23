const router = require('express').Router();
const {
    getThoughts,
    getThoughtById,
    createThought,
    deleteThought,
    updateThought,
} = require('../../controllers/thought-controller');
// /api/thoughts
router
    .route('/')
    .get(getThoughts)
    .post(createThought);

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// router.route('/:id/:commentId/:replyId').delete(removeReply);

module.exports = router;