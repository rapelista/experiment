import { ContextModalProps as MantineContextModalProps } from '@mantine/modals';
import { modals } from '~/utils/libs/mantine';
import { EntityType } from './core/entity';

export type ContextModalProps<T extends EntityType = EntityType> =
  MantineContextModalProps<{
    data?: T;
  }>;

declare module '@mantine/modals' {
  export interface MantineModalsOverride {
    modals: typeof modals;
  }
}
