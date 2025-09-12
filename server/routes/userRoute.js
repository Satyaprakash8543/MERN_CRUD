import express from 'express';
import { create, deleteUser, getAll, getOne, update } from '../controller/userController.js';

const route = express.Router();

route.post("/create",create);
route.get('/getall',getAll);
route.get('/getone/:id',getOne)
route.put('/update/:id',update) //put method use to update the data
route.delete('/delete/:id',deleteUser)





export default route;