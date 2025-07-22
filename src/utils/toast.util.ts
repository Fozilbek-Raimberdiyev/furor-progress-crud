import { toast, type ToastOptions } from 'vue3-toastify'
export function showSuccessToast(
  message: string,
  callback?: () => void,
  config: ToastOptions = {},
) {
  if (message) {
    toast.success(message, {
      autoClose: 3000,
      ...config,
      onClose: callback,
    })
  }
}

export function showErrorToast(message: string, callback?: () => void, config: ToastOptions = {}) {
  if (message) {
    toast.error(message, {
      autoClose: 3000,
      ...config,
      onClose: callback,
    })
  }
}

export function showWarningToast(
  message: string,
  callback?: () => void,
  config: ToastOptions = {},
) {
  if (message) {
    toast.warning(message, {
      autoClose: 3000,
      ...config,
      onClose: callback,
    })
  }
}

export function showInfoToast(message: string, callback?: () => void, config: ToastOptions = {}) {
  if (message) {
    toast.info(message, {
      autoClose: 3000,
      ...config,
      onClose: callback,
    })
  }
}
