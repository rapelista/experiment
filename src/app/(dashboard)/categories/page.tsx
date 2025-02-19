'use client';

import { Button, Group, Stack, Title } from '@mantine/core';
import { modals } from '@mantine/modals';

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
    </Stack>
  );
}
