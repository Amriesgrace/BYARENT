import express from 'express';
import Users from '../controllers/users';

const router = express.Router();

router.post('/', Users.createUser);
router.get('/', Users.getUsers);
router.get('/:id', Users.getUser);


export default router;