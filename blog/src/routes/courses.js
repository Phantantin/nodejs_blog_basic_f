const express = require('express');
const router = express.Router();
const courseController = require('../app/controlles/CourseControlle');

router.get('/create', courseController.create);
router.post('/store', courseController.store);

router.get('/:id/edit', courseController.edit);

router.post('/hand-form-action', courseController.handFormAction);

router.put('/:id', courseController.update);

router.delete('/:id/force', courseController.forceDestroy);

router.delete('/:id', courseController.delete);

router.patch('/:id/restore', courseController.restore);

router.get('/:slug', courseController.show);

module.exports = router;
