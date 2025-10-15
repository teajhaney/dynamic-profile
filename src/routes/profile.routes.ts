import { Router } from 'express';
import { fetchDynamicProfileInfo } from '../controller/profile.controller.ts';
const router = Router();

router.get('/me', fetchDynamicProfileInfo);

export default router;
