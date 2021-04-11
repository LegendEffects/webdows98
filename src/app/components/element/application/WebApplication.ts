import React from "react";
import IApplicationDetails from "../../../interfaces/IApplicationDetails";

export default abstract class WebApplication {
  public static details: IApplicationDetails;
  public static component: React.FC;
}