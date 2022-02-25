import React from "react";
import { css } from "@emotion/react";
import { MoonLoader } from "react-spinners";
const override = css`
  display: block;
  margin: 20% auto;
`;
function Loader({ size = 20, color = "#26facb" }) {
  return (
    <MoonLoader color={color} css={override} loading={true} size={size} />
  );
}

export default Loader;
