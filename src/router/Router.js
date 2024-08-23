import React, { useEffect, useState } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from '../screens/Landing';
import Main from '../apps/Main';
import Login from '../screens/Login';
import Dashboard from '../pages/Dashboard';
import Auth from '../apps/Auth';
// import SignUp from '../screens/SignUp';
import Locataire from '../pages/locataire/Locataire';
import LocataireList from '../pages/locataire/view/LocataireListe';
import LocataireDetaille from '../pages/locataire/view/LocataireDetaille';
import AddLocataire from '../pages/locataire/view/AddLocataire';
import Prestataire from '../pages/prestataire/Prestataire';
import PrestataireList from '../pages/prestataire/view/PrestataireList';
import PrestataireDetaille from '../pages/prestataire/view/PrestataireDetaille';
import AddPrestataire from '../pages/prestataire/view/AddPrestataire';
import Proprietaire from '../pages/Proprietaire/Proprietaire';
import ProprietaireListe from '../pages/Proprietaire/view/ProprietaireListe';
import ProprietaireDetaille from '../pages/Proprietaire/view/ProprietaireDetaille';
import AddProprietaire from '../pages/Proprietaire/view/AddProprietaire';
import Profile from '../pages/profile/Profile';
import ProfileDetaille from '../pages/profile/view/ProfileDetaille';
import EditProfile from '../pages/profile/view/EditProfile';
import DemandeIncidence from '../pages/DemandeIncidence';
import Paiement from '../pages/Paiement';
import IncidenceDetaille from '../pages/incidences/view/IncidenceDetaille';
import AddIncidence from '../pages/incidences/view/AddIncidence';
import IncidencesListe from '../pages/incidences/view/IncidencesListe';
import DemandePrestataire from '../pages/DemandePrestataire/DemandePrestataire';
import DemandeDetaille from '../pages/DemandePrestataire/view/DemandeDetaille';
import DemandeListe from '../pages/DemandePrestataire/view/DemandeListe';
import EditPrestataire from '../pages/prestataire/view/EditPrestataire';
import EditIncidence from '../pages/incidences/view/EditIncidence';
import getMe from '../components/GetMe';



export default function Router() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Vérifier si un token existe dans le localStorage
        const token = localStorage.getItem('token');
        if (token) {
            setUser(getMe());
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                {user ? <Route path="/" element={<Main />}>
                    <Route index element={<Dashboard />} />

                    <Route path='/locataire' element={<Locataire />} >
                        <Route index element={< LocataireList />} />
                        <Route path='locataireDetaille/:id' element={<LocataireDetaille />} />
                        <Route path='addLocataire' element={<AddLocataire />} />
                    </Route>

                    <Route path='/prestataire' element={<Prestataire />}>
                        <Route index element={<PrestataireList />} />
                        <Route path='prestataireDetaille/:id' element={<PrestataireDetaille />} />
                        <Route path='addPrestataire' element={<AddPrestataire />} />
                        <Route path='EditPrestataire/:id' element={<EditPrestataire />} />
                    </Route>
                    <Route path='/incidences' element={<Profile />}>
                        <Route index element={<IncidencesListe />} />
                        <Route path='incidencedetaille/:id' element={<IncidenceDetaille />} />
                        <Route path='addincidence' element={<AddIncidence />} />
                        <Route path='editincidence/:id' element={<EditIncidence />} />
                    </Route>

                    <Route path='/proprietaire' element={<Proprietaire />}>
                        <Route index element={<ProprietaireListe />} />
                        <Route path='proprietairedetaille/:id' element={<ProprietaireDetaille />} />
                        <Route path='addproprietaire' element={<AddProprietaire />} />
                    </Route>

                    <Route path='/DemandePrestataire' element={<DemandePrestataire />}>
                        <Route index element={<DemandeListe />} />
                        <Route path='DemandeDetaille/:id' element={<DemandeDetaille />} />
                    </Route>

                    <Route path='/profile' element={<Profile />}>
                        <Route index element={<ProfileDetaille />} />
                        <Route path='editProfile' element={<EditProfile />} />
                    </Route>

                    <Route path='/demandeIncidence' element={<DemandeIncidence />} />
                    <Route path='/paiement' element={<Paiement />} />

                </Route> : (
                    <Route path="/" element={<Auth />}>
                        <Route index element={<Landing />} />
                        <Route path='login' element={<Login />} />
                        {/* <Route path='SignUp' element={<SignUp />} /> */}

                    </Route>
                )}


            </Routes>
        </BrowserRouter>
    )
}
