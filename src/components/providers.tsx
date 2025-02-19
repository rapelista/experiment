'use client';

import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { modalsProviderProps, theme } from '~/utils/libs/mantine';

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider {...modalsProviderProps}>{children}</ModalsProvider>
    </MantineProvider>
  );
}
