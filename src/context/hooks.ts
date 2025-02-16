export let globalShowSnackbar: (
  message: string,
  description: string,
  variant?: "error" | "warning" | "info" | "success",
  duration?: number
) => void;

export const setGlobalShowSnackbar = (fn: typeof globalShowSnackbar) => {
  globalShowSnackbar = fn;
};

export const showGlobalSnackbar = (
  message: string,
  description: string,
  variant: "error" | "warning" | "info" | "success" = "info",
  duration = 3000
) => {
  if (globalShowSnackbar) {
    globalShowSnackbar(message, description, variant, duration);
  } else {
    console.warn(
      "showGlobalSnackbar called before MessageProvider was mounted."
    );
  }
};
