/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";

const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    css={css`
      display: flex;
      position: absolute;
      top: 50%;
      ${direction === "right" ? `right: 20px` : `left: 20px`};
      justify-content: center;
      background: transperant;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      color: #000;
      &:hover {
        transform: scale(1.3);
      }
    `}
  >
    {direction === "right" ? (
      <ChevronRight fontSize="large" />
    ) : (
      <ChevronLeft fontSize="large" />
    )}
  </div>
);

export default Arrow;
