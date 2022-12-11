import Pagination from "@mui/material/Pagination";
import { forwardRef } from "react";

interface TablePaginationProps {
  page: number;
  setPage: (e: number) => void;
  count: number;
  articles?: true;
}

const TablePagination = forwardRef<HTMLHeadingElement, TablePaginationProps>(
  ({ page, setPage, count, articles }, ref) => {
    const executeScroll = (ref: HTMLHeadingElement) => {
      ref.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
      if (articles) {
        setPage(page - 1);
      } else {
        setPage(page);
      }

      if (ref) {
        executeScroll((ref as React.MutableRefObject<HTMLHeadingElement>).current);
      }
    };
    return (
      <Pagination
        count={count}
        shape="rounded"
        page={page}
        onChange={handleChange}
        style={{ marginBottom: 15 }}
      />
    );
  }
);

export default TablePagination;
