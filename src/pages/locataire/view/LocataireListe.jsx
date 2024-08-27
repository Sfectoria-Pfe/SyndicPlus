import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { IoArchiveOutline } from "react-icons/io5";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { DataGrid, GridToolbarContainer, GridActionsCellItem, GridRowEditStopReasons } from '@mui/x-data-grid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import axios from 'axios';

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
  const [rows, setRows] = React.useState([]);

  const getLocataire = async () => {
    try {

      let response = await axios.get("http://localhost:9000/locataire/getlocataire")
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
    getLocataire()

  }, [])
  console.log(rows,"rows");
  

  const [rowModesModel, setRowModesModel] = React.useState({});
  const navigate = useNavigate();

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const showDeleteToast = () => {
    toast.success('Locataire archiver!');
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
    { field: 'name', headerName: 'Nom complet', width: 180, editable: true },
    {
      field: 'email',
      headerName: 'Email',
      width: 220,
      editable: true,
      type: 'email',
    },
    {
      field: 'appartement',
      headerName: 'appartement',
      width: 100,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'nbredeEtage',
      headerName: "nombre de l'etage",
      width: 100,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'telephone',
      headerName: 'telephone',
      width: 100,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'status',
      headerName: 'status',
      type: 'text',
      width: 100,
      align: 'left',
      headerAlign: 'left',
      editable: true,
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
          onClick={() => navigate(`/locataire/locataireDetaille/${id}`)}
          color="inherit"
        />,
        <GridActionsCellItem
          icon={<IoArchiveOutline />}
          label="Archive"
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
      <ToastContainer />
    </Box>
  );
}
