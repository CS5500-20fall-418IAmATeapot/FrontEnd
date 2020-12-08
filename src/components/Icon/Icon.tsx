import React, { FunctionComponent } from "react";
import { iconMap } from "./IconMapping";

interface OwnProps {
  name: string;
  size: number;
  className?: string;
}

type Props = OwnProps;

const Icon: FunctionComponent<Props> = (props) => {
  return (
    <img
      src={iconMap[props.name]}
      alt=""
      style={{ width: props.size }}
      className={props.className}
    />
  );
};

export { Icon };
