import { Router } from "express";
import { AuthenticationController } from "./controller/AuthenticationController";
import { GetInfoController } from "./controller/GetInfoController";
import { ListController } from "./controller/ListController";
import { ProfileUserController } from "./controller/ProfileUserController";
import { SignUpController } from "./controller/SignUpController";
import { TaskController } from "./controller/TaskController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post('/authenticate', new AuthenticationController().handle);
router.post('/signup', new SignUpController().handle);

router.post('/lists', ensureAuthenticated, new ListController().handleCreate);
router.put('/lists', ensureAuthenticated, new ListController().handleUpdate);
router.delete('/lists/:id', ensureAuthenticated, new ListController().handleDelete)
router.put('/publish', ensureAuthenticated, new ListController().handlePublish);
router.post('/share', ensureAuthenticated, new ListController().handleShare);

router.post('/tasks', ensureAuthenticated, new TaskController().handleCreate);
router.put('/tasks', ensureAuthenticated, new TaskController().handleUpdate);
router.delete('/tasks/:id', ensureAuthenticated, new TaskController().handleDelete)
router.put('/done', ensureAuthenticated, new TaskController().handleDone);

router.get('/info',ensureAuthenticated, new GetInfoController().handleGetAll);
router.get('/publishedList/:id', new GetInfoController().handleGetTasksByList);
router.get('/users',ensureAuthenticated, new GetInfoController().handleGetAllUsers);
router.get('/users/:id', ensureAuthenticated, new GetInfoController().handleGetUsersFromList);

router.get('/profile', ensureAuthenticated, new ProfileUserController().handle);

export { router }