import React from "react";
import { css } from "@emotion/react";
import { MoonLoader } from "react-spinners";
const override = css`
  display: block;
  margin: 20% auto;
`;
function Spinner({ size = 100, bg = "bg-primary-200" }) {
  return (
    <div className={`flex justify-end items-end ${bg}`}>
      <MoonLoader color="#26facb" css={override} loading={true} size={size} />
    </div>
  );
}

export default Spinner;
