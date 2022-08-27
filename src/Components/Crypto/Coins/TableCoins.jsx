import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "market_cap_rank",
    headerName: "#",
 
  },
  {
    field: "name",
    headerName: "Coin",

  },
  {
    field: "current_price",
    headerName: "Price",

  },
  {
    field: "price_change_percentage_1h_in_currency",
    headerName: "1h",

  },
  {
    field: "price_change_percentage_24h_in_currency",
    headerName: "24h",

  },
  {
    field: "price_change_percentage_7d_in_currency",
    headerName: "7d",

  },
  {
    field: "total_volume",
    headerName: "Total Volume",

  },
  {
    field: "market_cap",
    headerName: "Market Capitalization",

  },
  {
    field: "chart",
    headerName: "Last 7 days",

  },
];

export default function TableCoins({ markets }) {
  return (
    <div className="tableCoins">
    <Box sx={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={markets}
        columns={columns}
        rowsPerPageOptions={[10]}
        sx={{
          color: "white",
          boxShadow: 2,
          border: "1px solid white",
        }}
      />
    </Box>
    </div>
  );
}
