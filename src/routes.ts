import express from 'express';
import ClassesController from './controllers/ClassesControllers';
import ConnectionsController from './controllers/ConnectionsControllers';
import UsersController from './/controllers/UsersControllers';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();
const usersController = new UsersController();

routes.get("/users", usersController.index);
routes.post("/users", usersController.create);

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);


routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;