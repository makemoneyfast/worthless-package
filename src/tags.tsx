import React from "react";

export const UselessHeading = (props: { length: number }) => (
  <h1>{"whatever ".repeat(length)}</h1>
);

export const UselessBodyContent = (props: { length: number }) => (
  <p>{"Random talking ".repeat(length * 3)}</p>
);
