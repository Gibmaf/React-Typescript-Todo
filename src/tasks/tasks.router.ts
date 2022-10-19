import { Response, Router } from 'express';
import { Request } from 'express-validator/src/base';
import { TasksController } from './task.controller';

export const taskRouter: Router = Router();

taskRouter.get(
  '/tasks',
  async (req: Request, res: Response) => {
    const taskController = new TasksController();
    const allTasks = await taskController.getAll();
    res.json(allTasks);
  },
);
