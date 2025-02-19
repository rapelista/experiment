'use client';

import { Button, Group, Stack, Text } from '@mantine/core';
import { ContextModalProps } from '~/types/mantine';

export function CategoryModal(props: ContextModalProps) {
  return (
    <Stack>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        blanditiis pariatur fugit velit, ea rem et totam, harum ex dolorum ipsam
        earum, architecto magni excepturi. Consequatur quisquam iure non vel!
      </Text>

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
