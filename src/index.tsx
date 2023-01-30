import React from "react";

export const HeadingWithSideEffect = (caption: string) => {
  console.log("the caption is " + caption);
  return <h1>{caption}</h1>;
};
