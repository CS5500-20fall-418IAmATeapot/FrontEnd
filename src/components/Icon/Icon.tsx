import React, { FunctionComponent } from "react";
import { iconMap } from "./IconMapping";

interface OwnProps {
  name: string;
  size: number | Array<number>;
  className?: string;
  onClick?:any
}

type Props = OwnProps;

const Icon: FunctionComponent<Props> = (props:Props) => {
  var styleObj: any = {};
  const size = props.size;
  if (size instanceof Number) {
    styleObj["width"] = size;
  } else if (size instanceof Array) {
    styleObj["width"] = size[0];
    styleObj["height"] = size[1];
  }
  return (
    <img onClick={props.onClick} src={iconMap[props.name]} alt="" style={styleObj} className={props.className} />
  );
};

export { Icon };
