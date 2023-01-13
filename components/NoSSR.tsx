import React, { ReactNode, Fragment } from "react";
import dynamic from "next/dynamic";
import { ChildrenProps } from "../types";

const NoSSR = ({ children }: ChildrenProps) => (
  <Fragment>{children}</Fragment>
);

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
});
