import * as React from 'react';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';  // Icône d'acceptation
import CloseIcon from '@mui/icons-material/Close';  // Icône de refus
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import axios from 'axios';

const showSuccess = () => {
  toast.success('Ajout réussie!');
};

const showReject = () => {
  toast.error('Rejeté!');
};

export default function DemandeListe() {
  const [rows, setRows] = React.useState([]);

  const getDemandePrestataire = async () => {
    try {
      let response = await axios.get("http://localhost:9000/demandePrestataire/getdemandeprestataire")
      const dataWithId = response.data.map((item, index) => ({
        ...item,
        id: item._id
      }));
      setRows(dataWithId);

    } catch (error) {
      <p>you have an error</p>
    }
  }

  React.useEffect(() => {
    getDemandePrestataire()

  }, [])
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


  const handleAccept = async (id) => {
    console.log("ID de la demande acceptée :", id); // Ajoutez ce log pour vérifier l'`id`
    try {
      const response = await axios.post(`http://localhost:9000/demandePrestataire/acceptdemandeprestataire/${id}`);
      if (response.status === 200) {
        showSuccess();
        setRows(rows.map((row) => (row.id === id ? { ...row, status: 'accepted' } : row)));
      } else {
        toast.error('Erreur lors de l\'acceptation de la demande');
      }
    } catch (error) {
      toast.error(`Erreur: ${error.response ? error.response.data.message : error.message}`);
    }
  };
  
  const handleReject = async (id) => {
    try {
      await axios.put(`http://localhost:9000/demandePrestataire/refusedemandeprestataire/${id}`);
      showReject();
      setRows(rows.map((row) => (row.id === id ? { ...row, status: 'refused' } : row)));
    } catch (error) {
      toast.error('Erreur lors du rejet de la demande');
    }
  };  

  const columns = [
    {
      field: 'avatar',
      headerName: 'Photo',
      width: 100,
      renderCell: (params) => (
        <img
          src={params.value}
          alt=""
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
      field: 'travail',
      headerName: 'Travail',
      width: 220,
      editable: true,
      type: 'Travail',
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 290,
      editable: true,
    },
    {
      field: 'cv',
      headerName: 'cv',
      width: 220,
      editable: true,
      type: 'singleSelect',
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
            onClick={() => navigate(`/DemandePrestataire/DemandeDetaille/${id}`)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<CheckIcon />}
            label="Success"
            onClick={() => handleAccept(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<CloseIcon />}
            label="Reject"
            onClick={() => handleReject(id)}
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
      <Box sx={{ width: '80%' }}>
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
      <ToastContainer />
    </Box>
  );
}

