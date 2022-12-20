import express from 'express';
import {owner,updateOwner,allOwners,oneOwner,deleteOne} from '../controler/controler.js';

const ownerRouter = express.Router();

ownerRouter.post('/lightSupply',owner);

ownerRouter.patch('/lightSupply/:id',updateOwner);

ownerRouter.get('/lightSupply',allOwners);

ownerRouter.get('/lightSupply/:id',oneOwner);

ownerRouter.delete('/lightsupply/:id',deleteOne);

export default ownerRouter;

