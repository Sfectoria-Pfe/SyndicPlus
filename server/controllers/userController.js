import User from '../models/user.js';


export const getALLUsers = async (request, response) => {
    try {
        const users = await User.find();
        response.status(200).json(users);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'user not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createUser = async (req, res) => {
    try {
        // Récupérer les données de la requête
        const { password, ...otherDetails } = req.body;

        // Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Créer un nouvel utilisateur avec le mot de passe haché
        const user = new User({ ...otherDetails, password: hashedPassword });

        // Sauvegarder l'utilisateur dans la base de données
        const savedUser = await user.save();

        // Répondre avec l'utilisateur sauvegardé
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {

            return res.status(404).json({ error: 'user not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
