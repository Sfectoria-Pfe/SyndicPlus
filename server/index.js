import express from 'express';
import dotenv from 'dotenv';
import './models/index.js'
import userRoutes from './routes/userRoutes.js';
import prestataireRoutes from './routes/prestataireRoutes.js';
import incidencesRoutes from './routes/incidencesRouter.js';
import locataireRoutes from './routes/locataireRoutes.js';
import paiementRoutes from './routes/locataireRoutes.js';
import proprietaireRoutes from './routes/proprietaireRoutes.js';
import syndicRoutes from './routes/syndicRoutes.js';
import cors from "cors"


const app = express();
app.use(cors())
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 7000;

app.use('/users', userRoutes);
app.use('/prestataire', prestataireRoutes);
app.use('/incidence', incidencesRoutes);
app.use('/locataire', locataireRoutes);
app.use('/paiement', paiementRoutes);
app.use('/proprietaire', proprietaireRoutes);
app.use('/syndic', syndicRoutes);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})