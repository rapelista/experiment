'use client';

import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { modalsProviderProps } from '~/utils/libs/mantine';

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <MantineProvider>
      <ModalsProvider {...modalsProviderProps}>{children}</ModalsProvider>
    </MantineProvider>
  );
}
