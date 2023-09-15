// cors.middleware.ts
import cors from 'cors';

export function corsMiddleware() {
    const corsOptions = {
        origin: "*",
        optionsSuccessStatus: 200,
        credentials: true,
        // allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept"
    };

    return cors(corsOptions);
}