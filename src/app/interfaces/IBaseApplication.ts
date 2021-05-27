import IApplicationDetails from "./IApplicationDetails";
export default interface IBaseApplication {
  details: IApplicationDetails;
  component: React.FC;
}