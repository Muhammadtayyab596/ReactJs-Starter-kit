import React, { useState } from "react";
import { setGlobalShowSnackbar } from "./hooks";

export const MessageContext = React.createContext<IMessageContext>({
  snackbarState: {
    isSnackbarVisible: false,
    snackBarMessage: "",
    snackBarDescription: "",
    variant: "info",
    duration: 3000,
  },
  showSnackbar: () => {
    throw new Error("showSnackbar called outside of MessageProvider");
  },
  hideSnackbar: () => {
    throw new Error("hideSnackbar called outside of MessageProvider");
  },
});

export const MessageConsumer = MessageContext.Consumer;
export const MessageProvider = MessageContext.Provider;

export interface IMessageContainer {
  children: ReactNode[] | ReactNode;
}

export interface IMessageContext {
  snackbarState: {
    isSnackbarVisible: boolean;
    snackBarMessage: string;
    snackBarDescription: string;
    variant: "error" | "warning" | "info" | "success";
    duration: number;
  };
  showSnackbar: (
    message: string,
    snackBarDescription: string,
    variant: "error" | "warning" | "info" | "success",
    duration?: number
  ) => void;
  hideSnackbar: () => void;
}

export const MessageContainer = ({
  children,
}: IMessageContainer): ReactNode => {
  const [snackbarState, setSnackbarState] = useState<
    IMessageContext["snackbarState"]
  >({
    isSnackbarVisible: false,
    snackBarMessage: "",
    snackBarDescription: "",
    variant: "info", // ✅ This now correctly matches the type
    duration: 3000,
  });

  const showSnackbar = (
    message: string,
    description: string,
    variant: "info" | "error" | "warning" | "success" = "info",
    duration = 3000
  ): void => {
    setSnackbarState({
      isSnackbarVisible: true,
      snackBarMessage: message,
      snackBarDescription: description,
      variant,
      duration,
    });
  };

  const hideSnackbar = (): void => {
    setSnackbarState({
      ...snackbarState,
      isSnackbarVisible: false,
      snackBarMessage: "",
      snackBarDescription: "",
      variant: "info",
    });
  };

  setGlobalShowSnackbar(showSnackbar);

  return (
    <MessageProvider
      value={{
        snackbarState,
        hideSnackbar,
        showSnackbar,
      }}
    >
      {children}
    </MessageProvider>
  );
};
