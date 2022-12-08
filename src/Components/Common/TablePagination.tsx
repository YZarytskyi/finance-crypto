import Pagination from '@mui/material/Pagination';
import { RefObject } from 'react';


interface TablePaginationProps {
  page: number;
  setPage: (e: number) => void;
  count: number;
  articlesTitle?: RefObject<HTMLHeadingElement>;
}

const TablePagination: React.FC<TablePaginationProps> = ({page, setPage, count, articlesTitle}) => {

  const executeScroll = (HTMLElement: RefObject<HTMLHeadingElement>) => {
    HTMLElement?.current?.scrollIntoView({behavior: 'smooth'})    
  }

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page - 1)

    if (articlesTitle) {
      executeScroll(articlesTitle);
    }
  }
  return (
      <Pagination count={count} shape="rounded" page={page} onChange={handleChange} style={{marginBottom: 15}}/>
  );
}

export default TablePagination;