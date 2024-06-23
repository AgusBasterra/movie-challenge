'use client'

import {Pagination, Stack} from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC } from 'react';

interface PaginationI {
    page: number
    pages: number
}

const Paginations: FC<PaginationI> = ({ page, pages }) => {
    const searchParams = useSearchParams()
    const router = useRouter()

    const handleOnChange = (event: React.ChangeEvent<unknown>, page: number) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', page.toString())
        router.replace(`?${params}`)
    }

  return (
    <Stack>
      <Pagination count={pages} page={page} shape="rounded" onChange={handleOnChange} />
    </Stack>
  );
}

export default Paginations;