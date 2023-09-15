import express from 'express';

import { corsMiddleware, accessControlMiddleware, loggerMiddleware } from './middleware';

import router from './routes';

const app = express();
const port = process.env.PORT || 5000;

app.use(corsMiddleware());
app.use(accessControlMiddleware());
app.use(loggerMiddleware);
app.use(router);

app.listen(port, () => {
    console.log(`Smoothie Builder API v1 started at http://localhost:${port}`);
});