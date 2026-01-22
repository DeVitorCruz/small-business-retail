export interface SideBarMenu {
  label: string;
  icon: string;
  route?: string;
  expanded?: boolean,
  children?: SideBarMenu[];
};
