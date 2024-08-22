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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import axios from 'axios';

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
  const [rows, setRows] = React.useState([]);

  const getPrestataire = async () => {
    try {
     
      let response = await axios.get("http://localhost:9000/prestataire/getprestataire")
      const dataWithId = response.data.map((item, index) => ({
        ...item,
        id:item._id
      }));
      setRows(dataWithId);

    } catch (error) {
      <p>you have an error</p>

    }

  }

  React.useEffect(() => {
    getPrestataire()

  }, [])

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


  const columns = [
    {
      field: 'avatar',
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
      field: 'travail',
      headerName: 'Travail',
      width: 180,
      editable: true,
      type: 'travail',
    },
    {
      field: 'description',
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
          value={params.value || 0} // Assurez-vous que la valeur est numérique
          onChange={(event, newValue) => {
            const updatedRows = rows.map(row => 
              row.id === params.id ? { ...row, commentaire: newValue } : row
            );
            setRows(updatedRows);
          }}
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
          onClick={() => navigate(`/prestataire/prestataireDetaille/${id}`)}
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
          rowHeight={80}
        />
      </Box>
      <ToastContainer /> {/* Placez le ToastContainer ici */}
    </Box>
  );
}
