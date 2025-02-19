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
import { ParamsType } from '~/types/core/uri';

interface TableProps<T> {
  context: string;
  filters?: ParamsType;
  columns: ColumnDef<T>[];
}

export function Table<T extends EntityType>({
  context,
  filters,
  columns,
}: TableProps<T>) {
  const [params] = useState<ParamsType>({
    page: 1,
    limit: 10,
    orderBy: 'id',
    orderDirection: 'ASC',
    search: '',
    ...filters,
  });

  const { data } = useQuery<PaginatedType<T>>({
    queryKey: [context, params],
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
