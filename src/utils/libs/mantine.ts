import { createTheme, Modal, Table } from '@mantine/core';
import { ModalsProviderProps } from '@mantine/modals';
import { CategoryModal } from '~/components/dashboard/categories/modal';
import { DashboardModal } from '~/components/dashboard/modal';

export const modals = {
  dashboard: DashboardModal,
  category: CategoryModal,
};

export const modalsProviderProps: ModalsProviderProps = {
  modals,
};

export const theme = createTheme({
  components: {
    Modal: Modal.extend({
      defaultProps: {
        withCloseButton: false,
        closeOnClickOutside: false,
        closeOnEscape: false,
        styles: {
          title: {
            fontWeight: 600,
          },
        },
      },
    }),

    Table: Table.extend({
      defaultProps: {
        striped: true,
      },
    }),
  },
});
