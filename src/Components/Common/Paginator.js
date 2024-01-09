import { Pagination } from '@mui/material'
import React from 'react'

export const Paginator = ({productsLength, itemsPerPage, currentPage, handleChangePage}) => {
  return (
    <Pagination
    count={Math.ceil(productsLength / itemsPerPage)}
    page={currentPage}
    onChange={handleChangePage}
    color="primary"
    sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& .Mui-selected': {
            background: 'transparent',
            fontWeight: 'bolder',
            color: '#333',
        },
    }}
/>
  )
}
