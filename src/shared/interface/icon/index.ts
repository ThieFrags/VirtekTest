import {ComponentPropsWithoutRef} from "react";

export interface IIcon extends ComponentPropsWithoutRef<"svg"> {
  color?: string;
}