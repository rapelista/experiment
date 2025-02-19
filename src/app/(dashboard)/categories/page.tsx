'use client';

import { Button, Group, Stack, Title } from '@mantine/core';
import { modals } from '@mantine/modals';
import { Table } from '~/components/core/table';
import { columns } from '~/components/dashboard/categories/columns';

export default function Page() {
  return (
    <Stack>
      <Group justify="space-between">
        <Title>Category</Title>

        <Button
          onClick={() => {
            modals.openContextModal({
              modal: 'category',
              innerProps: {},
              size: 'lg',
              title: 'Create Category',
            });
          }}
        >
          Open Category Modal
        </Button>
      </Group>

      <Table context="categories" columns={columns} />
    </Stack>
  );
}
