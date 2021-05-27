import React from "react";
import IApplicationDetails from "../interfaces/IApplicationDetails";
import IBaseApplication from "../interfaces/IBaseApplication";

/**
 * This seems super counter-intuitive but allows for a nicer interface when
 * constructing new applications, this also allows for changing definitions
 * upon creation if required in the future.
 */
export default function defineApplication(component: React.FC, details: IApplicationDetails): IBaseApplication {
  return {
    details,
    component
  };
}