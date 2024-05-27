import { GridColDef } from "@mui/x-data-grid";

export const getColumns = (): GridColDef[] => {
  return [
    {
      field: "name",
      headerName: "Nombre",
      flex: 1.5,
      minWidth: 100,
    },
    {
      field: "price",
      headerName: "Precio",
      flex: 1,
      minWidth: 90,
    },
    {
      field: "stock",
      headerName: "Stock",
      flex: 0.75,
      minWidth: 60,
    }
  ];
};
