const express = require('express'); 
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();   
        this.port = process.env.PORT;   

        this.routePathUsers = '/api/users';

        // Midelware
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
    }

    routes(){
        this.app.use(
            this.routePathUsers, 
            require('../routes/user.routes')
        );
    }

    middlewares(){
        /* 
            los middlewares san la palabra reservada use.
        */

        this.app.use(cors({
            origin: ['http://localhst:3030']
        }));

        // parceo y lectura del body
        this.app.use(express.json());

        this.app.use(express.static('public'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('run server in port', this.port); 
        });
    }
}

module.exports = Server;