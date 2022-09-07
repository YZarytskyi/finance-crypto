import Pagination from '@mui/material/Pagination';


interface TablePaginationProps {
  page: number;
  setPage: (e: number) => void;
}

const TablePagination: React.FC<TablePaginationProps> = ({page, setPage}) => {
  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
  }
  return (
      <Pagination count={30} shape="rounded" page={page} onChange={handleChange}/>
  );
}

export default TablePagination;