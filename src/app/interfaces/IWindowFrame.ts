export default interface IWindowFrame {
  title: string;
  icon?: string;
  
  width: number;
  height: number;
  
  x: number;
  y: number;
  
  docked: boolean;

  resizable: boolean;
  component: React.FC;

  actions: {
    minimize: boolean
    restore: boolean
    close: boolean
  };
}