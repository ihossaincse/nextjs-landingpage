export interface Button {
  text: string;
  url: string;
  outline?: boolean;
}
export interface MenuItem {
  text: string;
  url: string;
  active: boolean;
  onclick: () => any;
}
