'use client';

import { Button, Code, Group, Stack } from '@mantine/core';
import { ContextModalProps } from '~/types/mantine';

export function DashboardModal(props: ContextModalProps) {
  return (
    <Stack>
      <Code block>{JSON.stringify(props, null, 2)}</Code>

      <Group>
        <Button
          variant="subtle"
          color="gray"
          onClick={() => {
            props.context.closeModal(props.id);
          }}
        >
          Close
        </Button>
      </Group>
    </Stack>
  );
}
