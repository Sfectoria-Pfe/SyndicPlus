import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import {
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from '@mui/x-data-grid-generator';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const roles = ['Market', 'Finance', 'Development'];
const randomRole = () => {
  return randomArrayItem(roles);
};

const initialRows = [
  {
    id: randomId(),
    name: randomTraderName(),
    etage: 1,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    DescriptionDuDegat: "Il y a une fuite d'eau importante dans le couloir du 5ème étage. Une intervention rapide est nécessaire.",
  },
  {
    id: randomId(),
    name: randomTraderName(),
    etage: 2,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    DescriptionDuDegat: "Il y a une fuite d'eau importante dans le couloir du 5ème étage. Une intervention rapide est nécessaire.",
  },
  {
    id: randomId(),
    name: randomTraderName(),
    etage: 3,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    DescriptionDuDegat: "Il y a une fuite d'eau importante dans le couloir du 5ème étage. Une intervention rapide est nécessaire.",
  },
  {
    id: randomId(),
    name: randomTraderName(),
    etage: 4,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    DescriptionDuDegat: "Il y a une fuite d'eau importante dans le couloir du 5ème étage. Une intervention rapide est nécessaire.",
  },
  {
    id: randomId(),
    name: randomTraderName(),
    etage: 5,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    DescriptionDuDegat: "Il y a une fuite d'eau importante dans le couloir du 5ème étage. Une intervention rapide est nécessaire.",
  },
];

function EditToolbar(props) {
  const navigate = useNavigate();
  
  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={() => navigate("/incidences/addincidence")}>
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
    toast.success('Élément supprimé!');
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
      field: "etage",
      headerName: "Nombre de l'étage",
      type: 'number',
      width: 100,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    { field: 'name', headerName: 'Nom', width: 180, editable: true },
    {
      field: 'DescriptionDuDegat',
      headerName: 'Description de dégat',
      type: 'text',
      width: 180,
      editable: true,
    },
    {
      field: 'role',
      headerName: 'Photo',
      width: 220,
      editable: true,
      type: 'singleSelect',
      valueOptions: roles,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}  
            label="Edit"
            onClick={() => navigate("/incidences/editincidence")}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<VisibilityIcon />}
            label="View"
            onClick={() => navigate("/incidences/incidencedetaille")}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
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
        Les Incidences
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
          rowHeight={50}
        />
      </Box>
      <ToastContainer /> {/* Placez le ToastContainer ici */}
    </Box>
  );
}


