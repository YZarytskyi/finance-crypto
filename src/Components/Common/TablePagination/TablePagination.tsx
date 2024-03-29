import Pagination from '@mui/material/Pagination'
import { forwardRef } from 'react'
import { useAppDispatch } from 'hooks/redux-hooks'
import { setCurrentPage } from 'Store/Reducers/articlesSlice'

interface TablePaginationProps {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  count: number
  articles?: true
}

export const TablePagination = forwardRef<HTMLHeadingElement, TablePaginationProps>(
  ({ page, setPage, count, articles }, ref) => {

    const executeScroll = (ref: HTMLHeadingElement) => {
      ref.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
      if (articles) {
        setPage(page - 1)
      } else {
        setPage(page)
      }

      if (ref) {
        executeScroll((ref as React.MutableRefObject<HTMLHeadingElement>).current)
      }
    }
    return (
      <Pagination
        count={count}
        shape='rounded'
        page={page}
        onChange={handleChange}
        style={{ marginBottom: 15 }}
      />
    )
  },
)
