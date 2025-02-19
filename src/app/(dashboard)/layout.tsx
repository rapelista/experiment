import { Button, Container, Divider, Group, Stack } from '@mantine/core';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container my="md">
        <Stack>
          <Group>
            <Button component={Link} href="/">
              Dashboard
            </Button>
            <Button component={Link} href="/categories">
              Category
            </Button>
          </Group>

          <Divider />

          {children}
        </Stack>
      </Container>
    </>
  );
}
