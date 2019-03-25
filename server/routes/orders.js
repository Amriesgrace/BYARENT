import express from 'express';
import Order from '../controllers/orders';
const router = express.Router();

router.post('/', Order.createOrder);
router.get('/', Order.getOrders);
router.get('/:id', Order.getOrder);

export default router;