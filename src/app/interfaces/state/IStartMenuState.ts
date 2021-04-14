import IApplicationDetails from "../IApplicationDetails";

export default interface IStartMenuState {
  open: boolean;
  programs: IApplicationDetails[];
}