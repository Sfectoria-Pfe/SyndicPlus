import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { DataGrid, GridToolbarContainer, GridActionsCellItem, GridRowEditStopReasons } from '@mui/x-data-grid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import Pro1 from '../../../assets/img/proprietaire1.jpg';
import Pro2 from '../../../assets/img/proprietaire2.jpg';
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
  randomEmail,
} from '@mui/x-data-grid-generator';

const roles = ['Market', 'Finance', 'Development'];
const randomRole = () => randomArrayItem(roles);

const initialRows = [
  {
    id: randomId(),
    name: randomTraderName(),
    telephone: 251243525,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    email: randomEmail(),
    payement: 'disponser',
    photo: Pro1,
  },
  {
    id: randomId(),
    name: randomTraderName(),
    telephone: 36243455,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    email: randomEmail(),
    payement: 'non payer',
    photo: Pro1,
  },
  {
    id: randomId(),
    name: randomTraderName(),
    telephone: 1932345,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    email: randomEmail(),
    payement: 'payer',
    photo: Pro1,
  },
  {
    id: randomId(),
    name: randomTraderName(),
    telephone: 2875756,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    email: randomEmail(),
    payement: 'non payer',
    photo: Pro2,
  },
  {
    id: randomId(),
    name: randomTraderName(),
    telephone: 235757,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    email: randomEmail(),
    payement: 'payer',
    photo: Pro2,
  },
];

function EditToolbar(props) {
  const navigate = useNavigate();

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={() => navigate("/proprietaire/addproprietaire")}>
        Add
      </Button>
    </GridToolbarContainer>
  );
}

export default function IncidenceListe() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const navigate = useNavigate();

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const showDeleteToast = () => {
    toast.success('Propriétaire supprimé avec succès!');
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
    { field: 'name', headerName: 'Nom complet', width: 180, editable: true },
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
      field: 'payement',
      headerName: 'Statut',
      width: 80,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 220,
      editable: true,
      type: 'email',
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 140, // Adjust width to fit the new icon
      cellClassName: 'actions',
      getActions: ({ id }) => [
        <GridActionsCellItem
          icon={<VisibilityIcon />}
          label="View"
          onClick={() => navigate("/proprietaire/proprietairedetaille")}
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
        La Liste Des Propriétaires
      </Typography>
      <Box
        sx={{
          height: 500,
          width: '100%',
          maxWidth: '1200px', // Optional: Limit the width of the DataGrid
        }}
      >
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
