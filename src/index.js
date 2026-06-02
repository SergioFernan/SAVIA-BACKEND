import express from 'express'; // Importamos express para crear el servidor
import userRoutes from './routes/userRoutes.js'; // Importamos las rutas de usuario desde el archivo userRoutes.js
import {dbConection} from './config/db.js'; // Importamos la función de conexión a la base de datos desde el archivo db.js

const app = express(); // Creamos una instancia de la aplicación express

dbConection(); // Llamamos a la función de conexión a la base de datos para establecer la conexión

app.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes como JSON

const port = 3010; // Definimos el puerto en el que se ejecutará el servidor

app.get(`/health`, (req, res) => { // Endpoint para verificar que el servidor está corriendo
    res.json({
        msj: "sitio corriendo" // Respondemos con un mensaje indicando que el sitio está corriendo
    })
})
//endpoint para probar rutas
app.use('/user', userRoutes); // Middleware para usar las rutas de usuario, todas las rutas definidas en userRoutes.js estarán disponibles bajo el prefijo /user

app.listen(port, () => { // Iniciamos el servidor y escuchamos en el puerto definido
    console.log(`Servidor corriendo en el puerto ${port}`); // Imprimimos un mensaje en la consola indicando que el servidor está corriendo
});