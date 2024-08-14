import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { DataGrid, GridToolbarContainer, GridActionsCellItem, GridRowEditStopReasons } from '@mui/x-data-grid';
import { Rating } from '@mui/material';
import Pres1 from '../../../assets/img/Prestataire/Pres1.png';
import Pres2 from '../../../assets/img/Prestataire/Pres2.png';
import Pres3 from '../../../assets/img/Prestataire/Pres3.png';
import Pres4 from '../../../assets/img/Prestataire/Pres4.jpg';
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from '@mui/x-data-grid-generator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const roles = ['Plombier', 'plombier', 'Pharmacien'];
const randomRole = () => randomArrayItem(roles);

const initialRows = [
  {
    id: randomId(),
    name: randomTraderName(),
    telephone: 25425445,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    commentaire: 3, // Nombre d'étoiles
    email: 'jean.dupont@example.com',
    Description: "Expert en plomberie avec 10 ans d'expérience dans la rénovation et la maintenance.",
    photo: Pres1,
  },
  {
    id: randomId(),
    name: randomTraderName(),
    telephone: 36535357,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    commentaire: 5, // Nombre d'étoiles
    email: 'maria.dupont@example.com',
    Description: "Expert en plomberie avec 10 ans d'expérience dans la rénovation et la maintenance.",
    photo: Pres2,
  },
  {
    id: randomId(),
    name: randomTraderName(),
    telephone: 19468686,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    commentaire: 2, // Nombre d'étoiles
    email: 'peter.parker@example.com',
    Description: "Expert en plomberie avec 10 ans d'expérience dans la rénovation et la maintenance.",
    photo: Pres3,
  },
  {
    id: randomId(),
    name: randomTraderName(),
    telephone: 28463856,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    commentaire: 4, // Nombre d'étoiles
    email: 'bruce.wayne@example.com',
    Description: "Expert en plomberie avec 10 ans d'expérience dans la rénovation et la maintenance.",
    photo: Pres4,
  },
  {
    id: randomId(),
    name: randomTraderName(),
    telephone: 23352358,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    commentaire: 1, // Nombre d'étoiles
    email: 'clark.kent@example.com',
    Description: "Expert en plomberie avec 10 ans d'expérience dans la rénovation et la maintenance.",
    photo: Pres2,
  },
];

function EditToolbar(props) {
  const navigate = useNavigate();

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={() => navigate("/prestataire/addPrestataire")}>
        Add
      </Button>
    </GridToolbarContainer>
  );
}

export default function PrestataireListe() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const navigate = useNavigate();

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const showDeleteToast = () => {
    toast.success('Prestataire supprimé avec succès!');
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
    showDeleteToast(); // Affiche la notification Toast après suppression
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRatingChange = (newValue, id) => {
    setRows(rows.map(row => row.id === id ? { ...row, commentaire: newValue } : row));
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
    { field: 'name', headerName: 'Nom et Prénom', width: 150, editable: true },
    {
      field: 'telephone',
      headerName: 'Téléphone',
      type: 'number',
      width: 120,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'string',
      width: 180,
      editable: true,
    },
    {
      field: 'role',
      headerName: 'Travail',
      width: 180,
      editable: true,
      type: 'singleSelect',
      valueOptions: roles,
    },
    {
      field: 'Description',
      headerName: 'Description',
      width: 220,
      editable: true,
    },
    {
      field: 'commentaire',
      headerName: 'Commentaire',
      width: 270,
      editable: true,
      renderCell: (params) => (
        <Rating
          value={params.value}
          onChange={(event, newValue) => handleRatingChange(newValue, params.id)}
          max={5}
        />
      ),
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 180,
      cellClassName: 'actions',
      getActions: ({ id }) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          onClick={() => navigate("/prestataire/EditPrestataire")}
          color="inherit"
        />,
        <GridActionsCellItem
          icon={<VisibilityIcon />}
          label="View"
          onClick={() => navigate("/prestataire/prestataireDetaille")}
          color="inherit"
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={handleDeleteClick(id)}
          color="inherit"
        />,
      ],
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
        Les Prestataires
      </Typography>
      <Box sx={{ width: '80%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          slots={{
            toolbar: EditToolbar,
          }}
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
