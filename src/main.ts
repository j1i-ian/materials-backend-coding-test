import mongoose from 'mongoose';
import express from 'express';

import morgan from 'morgan';
import httpError from 'http-errors';
import { MetadataController } from './main/metadata/metadata.controller';
import { ControllerInterface } from './main/controller.interface';

require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

interface SubRoutes {
    prefix: string;
    controller: ControllerInterface;
}

/**
 * Initialize app.
 *
 * Appplication sets middlewares, plugins, routes.
 *
 */

// mongoose.connect('mongodb://localhost/sample');
mongoose.connect(process.env.MONGODB_URL as string);

// console.log(db);

app.use(morgan('short'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const subRoutes = [
    {
        prefix: '/metadatas',
        controller: new MetadataController()
    }

] as SubRoutes[];


// health check
app.get('/', (req, res) => res.send('ok'));

subRoutes.forEach(route => app.use(route.prefix, route.controller.routers));

// catch 404 and forward to error handler
app.use((req, res, next) => {
    console.error('url cannot found');
    next(httpError(404));
});

app.listen(port, function(){
    console.log(`Listening on port ${ port }`);
});
