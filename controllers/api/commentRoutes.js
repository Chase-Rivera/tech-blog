const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
 
  try {
   
    const allComment = await Comment.findAll({
    });

    res.status(200).json(allComment);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.post('/', withAuth, async (req, res) => {
  
  try {
   
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req,res) => {
  try{
    const commentData = await Comment.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      }
    })

    if (!commentData) {
      res.status(404).json({ message: "No comment was found using this ID."});
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
})

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: "No comment found using this ID."});
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
