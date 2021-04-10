import IWindow from "../IWindow";

export default interface ISystemState {
  windows: IWindow[];
  volume: number;
  focusedWindow?: string;
}