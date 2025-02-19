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
import { EntityType, PaginatedType } from '~/types/core/entity';

interface TableProps<T> {
  context: string;
  columns: ColumnDef<T>[];
}

export function Table<T extends EntityType>({
  context,
  columns,
}: TableProps<T>) {
  const [pagination] = useState({
    page: 1,
    limit: 10,
  });

  const { data } = useQuery<PaginatedType<T>>({
    queryKey: [context, pagination],
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
