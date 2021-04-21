import styled from "@emotion/styled";
import { CursorProps } from "./index";

export const CursorWrapper = styled.svg<CursorProps>`
  width: 1.5rem;
  position: absolute;
  top: ${({ position }) => position.y}px;
  left: ${({ position }) => position.x}px;
  fill: ${({ color }) => color};
`;
