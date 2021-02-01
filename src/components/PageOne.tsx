import React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function PageOne(props: {
  id: string;
  text: string;
}): JSX.Element {
  const { id, text } = props;
  return (
    <div id={id} style={{ height: "200vh", backgroundColor: "LightSeaGreen" }}>
      <h2 style={{ color: "black" }}>{text}</h2>
    </div>
  );
}
