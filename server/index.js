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
import jwt from "jsonwebtoken"
import bodyParser from 'body-parser';
import User from './models/user.js';
import generateToken from './jwtUtils.js';

const app = express();
app.use(cors())


dotenv.config();
const PORT = process.env.PORT || 7000;
export const validateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1]; // Bearer <token>

        jwt.verify(token, 'syndicplus', (err, payload) => {
            if (err) {
                return res.status(403).json({
                    success: false,
                    message: 'Invalid token',
                });
            } else {
                req.user = payload;
                next();
            }
        });
    } else {
        res.status(401).json({
            success: false,
            message: 'Token is not provided',
        });
    }
};
app.use(bodyParser.json())
app.use(express.json());


app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Rechercher l'utilisateur par email
        const user = await User.findOne({email});

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password',
            });
        }

        // Comparer le mot de passe
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            // Générer le token JWT
            const token = generateToken(user);

            res.json({
                success: true,
                message: 'Authentication successful!',
                token: token,
            });
        } else {
            res.status(401).json({
                success: false,
                message: 'Invalid email or password',
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
});
app.get("/me", validateToken, (req, res)=>{
    res.json({
        success: true,
        message: "welcome to the  protected  route!",
        user: req.user
    })
})




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