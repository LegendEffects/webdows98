import ActionType from "./ActionType";

export default interface IWindowFrame {
  title: string;
  icon?: string;
  
  width: number;
  height: number;
  
  x: number;
  y: number;
  
  docked: boolean;
  
  resizable: boolean;
  decorated: boolean;
  component: React.FC;

  actions: ActionType[];
}