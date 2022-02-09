export interface Button {
  text: string;
  url: string;
}
export interface MenuItem {
  text: string;
  url: string;
  active: boolean;
  onclick: () => any;
}
