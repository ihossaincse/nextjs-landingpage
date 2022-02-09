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
export interface Title {
  text: string;
}
export interface IconTitleText {
  Icon: object;
  title: string;
  text: string;
}
