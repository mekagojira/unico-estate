const Content = require('../models/Content');

// @desc    Get all content
// @route   GET /api/content
// @access  Private
const getAllContent = async (req, res, next) => {
  try {
    const { type, status, locale, page = 1, limit = 10 } = req.query;

    // Build query
    const query = {};
    if (type) query.type = type;
    if (status) query.status = status;
    if (locale) query.locale = locale;

    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const contents = await Content.find(query)
      .populate('author', 'username email')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Content.countDocuments(query);

    res.json({
      success: true,
      data: contents,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single content
// @route   GET /api/content/:id
// @access  Private
const getContent = async (req, res, next) => {
  try {
    const content = await Content.findById(req.params.id)
      .populate('author', 'username email');

    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    res.json({
      success: true,
      data: content
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get content by slug
// @route   GET /api/content/slug/:slug
// @access  Private
const getContentBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const { locale } = req.query;

    const query = { slug };
    if (locale) query.locale = locale;

    const content = await Content.findOne(query)
      .populate('author', 'username email');

    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    res.json({
      success: true,
      data: content
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new content
// @route   POST /api/content
// @access  Private (Editor/Admin)
const createContent = async (req, res, next) => {
  try {
    // Add author from authenticated user
    req.body.author = req.user.id;

    const content = await Content.create(req.body);

    await content.populate('author', 'username email');

    res.status(201).json({
      success: true,
      data: content
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update content
// @route   PUT /api/content/:id
// @access  Private (Editor/Admin)
const updateContent = async (req, res, next) => {
  try {
    let content = await Content.findById(req.params.id);

    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    // Check if user is the author or admin
    if (content.author.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this content'
      });
    }

    content = await Content.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    ).populate('author', 'username email');

    res.json({
      success: true,
      data: content
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete content
// @route   DELETE /api/content/:id
// @access  Private (Admin only)
const deleteContent = async (req, res, next) => {
  try {
    const content = await Content.findById(req.params.id);

    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    await content.deleteOne();

    res.json({
      success: true,
      message: 'Content deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllContent,
  getContent,
  getContentBySlug,
  createContent,
  updateContent,
  deleteContent
};

