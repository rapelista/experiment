"use client";

import { MantineProvider } from "@mantine/core";

export function Providers({ children }: React.PropsWithChildren) {
  return <MantineProvider>{children}</MantineProvider>;
}
