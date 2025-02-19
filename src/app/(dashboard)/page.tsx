'use client';

import { Button, Group, Stack, Title } from '@mantine/core';
import { modals } from '@mantine/modals';
import { useMemo } from 'react';
import { EntityType } from '~/types/core/entity';

type SomeType = EntityType & {
  name: string;
};

export default function Page() {
  const data = useMemo(() => {
    return Array.from({ length: 10 }).map((_, index) => {
      const some: SomeType = {
        id: index + 1,
        name: 'Some ' + (index + 1),
      };

      return some;
    });
  }, []);

  return (
    <Stack>
      <Title>Dashboard</Title>

      <Group>
        {data.map((data, key) => (
          <Button
            key={key}
            onClick={() => {
              modals.openContextModal({
                modal: 'dashboard',
                innerProps: { data },
                title: 'Dashboard Modal',
                size: 'xl',
              });
            }}
          >
            Open Dashboard Modal
          </Button>
        ))}
      </Group>
    </Stack>
  );
}
