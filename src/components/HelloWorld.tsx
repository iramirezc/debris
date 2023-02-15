import React from "react";

export const HelloWorld: React.FC<{message?: string}> = ({message = "Hello World!"}) => {
  console.log("Hello World!");

  return <h1>{message}</h1>;
};
