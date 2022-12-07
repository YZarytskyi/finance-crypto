import Pagination from '@mui/material/Pagination';


interface TablePaginationProps {
  page: number;
  setPage: (e: number) => void;
  count: number;
}

const TablePagination: React.FC<TablePaginationProps> = ({page, setPage, count}) => {
  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page - 1)
  }
  return (
      <Pagination count={count} shape="rounded" page={page} onChange={handleChange} style={{marginBottom: 15}}/>
  );
}

export default TablePagination;