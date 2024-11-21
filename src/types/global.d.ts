import { Theme as MuiTheme } from "@mui/material/styles";

export {};

declare global {
  type ReactNode =
    | React.ReactElement<unknown>
    | FunctionComponent<unknown>
    | React.ComponentClass<unknown>
    | null;

  interface IBase extends Record<string, unkonwn> {
    _id?: string;
  }

  interface IUser extends Record<string, unknown> {
    _id?: string;
    name: string;
    email: string;
    userRole: string;
    isActive?: boolean;
    profilePicURL?: string;
  }

  interface ISidebar {
    open: boolean;
    onClose?: () => void;
    isSidebarExtended: boolean;
  }

  interface IPagination {
    pageNo: number;
    pageSize: number;
  }

  interface ISidebarItem {
    href: string;
    icon: ReactNode | null;
    icon2: ReactNode | null;
    title: string;
    isSidebarExtended?: boolean;
    children?: { title: string; href: string }[];
  }
}

declare module "@mui/material/styles/createPalette" {
  type colorNumber = {
    [number]: string;
  };
  export interface PaletteOptions {
    neutral: PaletteColor | colorNumber;
  }
  export interface Palette {
    neutral: PaletteColor | colorNumber;
  }
}

declare module "@emotion/react" {
  export type Theme = MuiTheme;
}
