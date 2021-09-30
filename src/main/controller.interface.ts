import { Router } from 'express';

export interface ControllerInterface {

    get routers(): Router;
}
