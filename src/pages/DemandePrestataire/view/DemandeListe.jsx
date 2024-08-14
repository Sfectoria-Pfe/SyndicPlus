import * as React from 'react';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';  // Icône d'acceptation
import CloseIcon from '@mui/icons-material/Close';  // Icône de refus
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Pres1 from '../../../assets/img/Prestataire/Pres1.png';
import Pres2 from '../../../assets/img/Prestataire/Pres2.png';
import Pres3 from '../../../assets/img/Prestataire/Pres3.png';
import Pres4 from '../../../assets/img/Prestataire/Pres4.jpg';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import {
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from '@mui/x-data-grid-generator';

const roles = ['Plombier', 'Pharmacien', 'Doctor'];
const randomRole = () => {
  return randomArrayItem(roles);
};

const initialRows = [
  {
    id: randomId(),
    name: randomTraderName(),
    telephone: 2535355,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    email: 'jean.dupont@example.com',
    Description: "Expert en plomberie avec 10 ans d'expérience dans la rénovation et la maintenance.",
    photo: Pres1,
  },
  {
    id: randomId(),
    name: randomTraderName(),
    telephone: 36535523,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    email: 'maria.dupont@example.com',
    Description: "Expert en plomberie avec 10 ans d'expérience dans la rénovation et la maintenance.",
    photo: Pres2,
  },
  {
    id: randomId(),
    name: randomTraderName(),
    telephone: 19525432,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    email: 'peter.parker@example.com',
    Description: "Expert en plomberie avec 10 ans d'expérience dans la rénovation et la maintenance.",
    photo: Pres3,
  },
  {
    id: randomId(),
    name: randomTraderName(),
    telephone: 285354325,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    email: 'bruce.wayne@example.com',
    Description: "Expert en plomberie avec 10 ans d'expérience dans la rénovation et la maintenance.",
    photo: Pres4,
  },
  {
    id: randomId(),
    name: randomTraderName(),
    telephone: 23452543,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    email: 'clark.kent@example.com',
    Description: "Expert en plomberie avec 10 ans d'expérience dans la rénovation et la maintenance.",
    photo: Pres2,
  },
];

const showSuccess = () => {
  toast.success('Ajout réussie!');
};

const showReject = () => {
  toast.error('Rejeté!');
};

export default function DemandeListe() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const navigate = useNavigate();

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const columns = [
    {
      field: 'photo',
      headerName: 'Photo',
      width: 100,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="" // Empty alt attribute for decorative images
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      ),
    },
    { field: 'name', headerName: 'Nom et Prénom', width: 180, editable: true },
    {
      field: 'telephone',
      headerName: 'Téléphone',
      type: 'number',
      width: 80,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 180,
      editable: true,
    },
    {
      field: 'role',
      headerName: 'Travail',
      width: 220,
      editable: true,
      type: 'singleSelect',
      valueOptions: roles,
    },
    {
      field: 'Description',
      headerName: 'Description',
      width: 290,
      editable: true,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 180, // Ajustez la largeur si nécessaire
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<VisibilityIcon />}
            label="View"
            onClick={() => navigate("/DemandePrestataire/DemandeDetaille")}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<CheckIcon />}
            label="Success"
            onClick={showSuccess}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<CloseIcon />}
            label="Reject"
            onClick={showReject}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        padding: 2,
      }}
    >
      <Typography variant="h4" gutterBottom className='mb-4'>
        Les Demandes des Prestataires
      </Typography>
      <Box sx={{width: '80%' }}> {/* Ajustez la largeur selon vos besoins */}
        <DataGrid
          rows={rows}
          columns={columns}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          slotProps={{
            toolbar: { setRows, setRowModesModel },
          }}
          rowHeight={80}
        />
      </Box>
      <ToastContainer /> {/* Placez le ToastContainer ici */}
    </Box>
  );
}

