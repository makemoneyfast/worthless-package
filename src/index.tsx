import React from "react";

export const HeadingWithSideEffect = (props: { caption: string }) => {
  console.log("the caption is " + props.caption);
  return <h1>{props.caption}</h1>;
};
