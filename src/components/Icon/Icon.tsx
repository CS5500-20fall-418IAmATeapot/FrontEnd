import React, { FunctionComponent } from "react";
import { iconMap } from "./IconMapping";

interface OwnProps {
  name: string;
  size: number | Array<number>;
  className?: string;
}

type Props = OwnProps;

const Icon: FunctionComponent<Props> = ({ className, name, size }) => {
  var styleObj: any = {};
  if (size instanceof Number) {
    styleObj["width"] = size;
  } else if (size instanceof Array) {
    styleObj["width"] = size[0];
    styleObj["height"] = size[1];
  }
  return (
    <img src={iconMap[name]} alt="" style={styleObj} className={className} />
  );
};

export { Icon };
