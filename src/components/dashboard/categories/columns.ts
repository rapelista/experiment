import { ColumnDef } from '@tanstack/react-table';
import { CategoryType } from '~/types/entities/category';

export const columns: ColumnDef<CategoryType>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
];
