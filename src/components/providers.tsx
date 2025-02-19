'use client';

import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { modalsProviderProps, theme } from '~/utils/libs/mantine';
import { getQueryClient } from '~/utils/libs/query';

export function Providers({ children }: React.PropsWithChildren) {
  const client = getQueryClient();

  return (
    <MantineProvider theme={theme}>
      <ModalsProvider {...modalsProviderProps}>
        <QueryClientProvider client={client}>
          {children}

          <ReactQueryDevtools buttonPosition="bottom-left" />
        </QueryClientProvider>
      </ModalsProvider>
    </MantineProvider>
  );
}
