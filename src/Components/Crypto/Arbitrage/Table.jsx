import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  {
    field: 'pair1',
    headerName: 'Pair 1',
    width: 130,
    editable: true,
  },
  {
    field: 'price1',
    headerName: 'Pair 1',
    width: 130,
    editable: true,
  },
  {
    field: 'pair2',
    headerName: 'Pair 2',
    width: 130,
    editable: true,
  },
  {
    field: 'price2',
    headerName: 'Price 2',
    width: 130,
    editable: true,
  },
  {
    field: 'pair3',
    headerName: 'Pair 3',
    width: 130,
    editable: true,
  },
  {
    field: 'price3',
    headerName: 'Price 3',
    width: 130,
    editable: true,
  },
  {
    field: 'result',
    headerName: 'Result',
    width: 130,
    editable: true,
  },
];

export default function DataGridDemo({result}) {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={result}
        columns={columns}
        rowsPerPageOptions={[10]}
      />
    </Box>
  );
}