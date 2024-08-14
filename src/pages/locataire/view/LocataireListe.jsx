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
import Loc1 from '../../../assets/img/Locataire1.jpg';
import Loc2 from '../../../assets/img/Locataire2.jpg';
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from '@mui/x-data-grid-generator';

const roles = ['Market', 'Finance', 'Development'];
const randomRole = () => randomArrayItem(roles);

const initialRows = [
  {
    id: randomId(),
    name: randomTraderName(),
    telephone: 25122478,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    email: 'jean.dupont@example.com',
    payement: 'payer',
    photo: Loc1,
  },
  {
    id: randomId(),
    name: randomTraderName(),
    telephone: 36785632,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    email: 'maria.dupont@example.com',
    payement: 'non payer',
    photo: Loc1,
  },
  {
    id: randomId(),
    name: randomTraderName(),
    telephone: 19442568,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    email: 'clark.kent@example.com',
    payement: 'disponser',
    photo: Loc2,
  },
  {
    id: randomId(),
    name: randomTraderName(),
    telephone: 28868745,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    email: 'peter.parker@example.com',
    payement: 'non payer',
    photo: Loc2,
  },
  {
    id: randomId(),
    name: randomTraderName(),
    telephone: 236654686,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    email: 'bruce.wayne@example.com',
    payement: 'disponser',
    photo: Loc1,
  },
];

function EditToolbar(props) {
  const navigate = useNavigate();

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={() => navigate("/locataire/addLocataire")}>
        Add
      </Button>
    </GridToolbarContainer>
  );
}

export default function LocataireListe() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const navigate = useNavigate();

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const showDeleteToast = () => {
    toast.success('Locataire supprimé avec succès!');
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
      width: 100,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'payement',
      headerName: 'Statut',
      width: 100,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 220,
      editable: true,
      type: 'singleSelect',
      valueOptions: roles,
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
          onClick={() => navigate("/locataire/locataireDetaille")}
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
        La Liste Des Locataires
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
