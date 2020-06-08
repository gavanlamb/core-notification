import { Request, Response } from 'express';
import Logger from '../logger';

export const createNotification = (req: Request, res: Response) => {
  Logger.info(req.body);
  res.status(200);
  res.send();
};

export const getNotifications = (req: Request, res: Response) => {
  Logger.info(req.body);
  res.status(200);
  res.send();
};
