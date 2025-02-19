'use client';

import {
  Table as MantineTable,
  Stack,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import { EntityType } from '~/types/core/entity';

type CategoryType = EntityType & {
  name: string;
};

const columns: ColumnDef<CategoryType>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
];

async function fetchCategories(
  params: Record<string, number>,
): Promise<{ data: CategoryType[] }> {
  const url = new URL('/');

  url.pathname = '/api/v1/categories';
  url.searchParams.append('page', String(params.page));
  url.searchParams.append('limit', String(params.limit));

  const res = await fetch(url.toString());
  const data = await res.json();

  return data;
}

export function Table() {
  const [pagination] = useState({
    page: 1,
    limit: 10,
  });

  const { data } = useQuery({
    queryKey: ['categories', pagination],
    queryFn: fetchCategories.bind(null, pagination),
  });

  const table = useReactTable({
    columns,
    data: data?.data || [],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Stack>
      <MantineTable>
        <TableThead>
          {table.getHeaderGroups().map((group) => (
            <TableTr key={group.id}>
              {group.headers.map((header) => (
                <TableTh key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableTh>
              ))}
            </TableTr>
          ))}
        </TableThead>

        <TableTbody>
          {table.getRowModel().rows.map((row) => (
            <TableTr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableTd key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableTd>
              ))}
            </TableTr>
          ))}
        </TableTbody>
      </MantineTable>
    </Stack>
  );
}
