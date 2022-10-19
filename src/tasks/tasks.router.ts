import { Response, Router } from 'express';
import { Request } from 'express-validator/src/base';
import { TasksController } from './task.controller';
import { createValidator } from './tasks.validator';
import { validationResult } from 'express-validator';
export const taskRouter: Router = Router();

taskRouter.get(
  '/tasks',
  async (req: Request, res: Response) => {
    const taskController = new TasksController();
    const allTasks = await taskController.getAll();
    res.json(allTasks);
  },
);

taskRouter.post(
  '/tasks',
  createValidator,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }
  },
);
