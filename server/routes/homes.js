import express from "express";
import Homes from '../controllers/homes';

const router = express.Router();

router.post('/', Homes.createAsset);
router.get('/', Homes.getAssets);
router.get('/:id', Homes.getAsset);
router.patch('/:id', Homes.editAsset);
router.delete('/:id', Homes.removeAsset)

export default router;