const express = require('express');
const router = express.Router();
const {
  getAllContent,
  getContent,
  getContentBySlug,
  createContent,
  updateContent,
  deleteContent
} = require('../controllers/contentController');
const { authenticate, authorize } = require('../middleware/auth');

// All routes require authentication
router.use(authenticate);

// Get routes (viewer and above)
router.get('/', getAllContent);
router.get('/slug/:slug', getContentBySlug);
router.get('/:id', getContent);

// Create, update, delete routes (editor and above)
router.post('/', authorize('editor', 'admin'), createContent);
router.put('/:id', authorize('editor', 'admin'), updateContent);
router.delete('/:id', authorize('admin'), deleteContent);

module.exports = router;

