import express, { Application } from 'express';
import cors from 'cors';
import userRoutes from '../routes/user.route';
import { config } from "../config/config";

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/users'
    }

    constructor() {
        this.app = express();
        this.port = config.server.port;

        this.middlewares();
        this.routes();

    }

    middlewares() {
        // CORS
        this.app.use(cors());
        // parsear body
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        // Carpeta pública
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`💥 App is ready and listening on port ${this.port} 💥`);
        })
    }

}

export default Server;