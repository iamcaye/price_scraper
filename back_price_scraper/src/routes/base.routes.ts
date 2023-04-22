import express from 'express';
import baseController from '../controllers/base.controller';

const router = express.Router();

router.get('', baseController.get);
// router.post()
// router.put()
// router.delete()