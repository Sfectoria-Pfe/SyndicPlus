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
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import axios from 'axios';


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
  const [rows, setRows] = React.useState([]);

  const getIncidences = async () => {
    try {
     
      let response = await axios.get("http://localhost:9000/incidence/getincidence")
      const dataWithId = response.data.map((item, index) => ({
        ...item,
        id: item.id || index + 1
      }));
      setRows(dataWithId);

    } catch (error) {
      <p>you have an error</p>

    }

  }

  React.useEffect(() => {
    getIncidences()

  }, [])

  const [rowModesModel, setRowModesModel] = React.useState({});
  const navigate = useNavigate();
  
  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const showDeleteToast = () => {
    toast.success('Incidente supprimé!');
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
      field: "nbredeEtage",
      headerName: "Nombre de l'étage",
      type: 'number',
      width: 100,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    { field: 'name', headerName: 'Nom', width: 180, editable: true },
    {
      field: 'descriptiondudegat',
      headerName: 'Description de dégat',
      type: 'text',
      width: 180,
      editable: true,
    },
    {
      field: 'avatar',
      headerName: 'Photo',
      width: 220,
      editable: true,
      type: 'singleSelect',
    },
    {
      field: "status",
      headerName: "status",
      type: 'number',
      width: 100,
      align: 'left',
      headerAlign: 'left',
      editable: true,
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
          getRowId={(row) => row.id} 
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


