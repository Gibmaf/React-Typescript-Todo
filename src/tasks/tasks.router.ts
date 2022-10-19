import { Response, Router } from 'express';
import { Request } from 'express-validator/src/base';

export const taskRouter: Router = Router();

taskRouter.get('/tasks', (req: Request, res: Response) => {
  res.send('Express + Typescript Server');
});
