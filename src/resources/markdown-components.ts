import * as React from "react";
import { Components } from "react-markdown";

export const MarkdownComponents: Components = {
  h2: (props: any) => React.createElement("h2", { className: "text-2xl font-semibold" }, props.children),
  p: (props: any) => React.createElement("p", { className: "mt-2" }, props.children),

};
