import express from "express";
import conn from "./db/connection.js";
import perrosRoutes from "./routes/perros.routes.js";
import propietariosRoutes from "./routes/propietarios.routes.js";
import historialRoutes from "./routes/historial.routes.js";

const app = express();

app.use(express.json());

app.use('/api/perros', perrosRoutes);
app.use('/api/propietarios', propietariosRoutes);
app.use('/api/historial', historialRoutes);

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

conn();
