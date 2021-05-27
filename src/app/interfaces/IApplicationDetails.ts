import IWindowFrame from "./IWindowFrame";

export default interface IApplicationDetails extends Partial<IWindowFrame> {
  title: string;
  
  width: number;
  height: number;
}