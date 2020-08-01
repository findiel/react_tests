import { useSnackbar } from 'notistack';


function useNotification() {
  const { enqueueSnackbar } = useSnackbar();

  function enqueNotification({ message, variant, options }) {
    enqueueSnackbar(message, {
      preventDuplicate: true,
      variant,
      ...options,
    });
  }

  function enqueueSuccessNotification({ message = '', options = {} } = {}) {
    const variant = 'success';
    enqueNotification({ message, variant, options });
  }

  function enqueueInfoNotification({ message = '', options = {} }) {
    const variant = 'info';
    enqueNotification({ message, variant, options });
  }

  function enqueueErrorNotification({ message = '', options = {} } = {}) {
    const variant = 'error';
    enqueNotification({ message, variant, options });
  }

  function enqueueAPIErrorNotification({ response, options = {} }) {
    const { data } = response || {};
    const variant = 'error';
    const message = (data && data.message) || "Unknown Error";

    enqueNotification({ message, variant, options });
  }

  function enqueueNotifications(notifications = []) {
    if (Array.isArray(notifications)) {
      notifications.forEach(enqueueInfoNotification);
    }
  }

  return {
    enqueueAPIErrorNotification,
    enqueueSuccessNotification,
    enqueueInfoNotification,
    enqueueErrorNotification,
    enqueueNotifications,
  };
}

export default useNotification;
