import IWindowFrame from "./IWindowFrame";

export default interface IWindow {
  uuid: string;
  visible: boolean;
  frame: IWindowFrame;
}