import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Cursor from "./components/Cursor";
import "./App.css";

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e9e9e9;
  cursor: none;
`;

type Cursor = {
  id: string;
  postion: {
    x: number;
    y: number;
  };
  color: string;
};

const App = () => {
  const [postion, setPosition] = useState({ x: 100, y: 100 });
  const [cursors, setCursors] = useState<Cursor[]>([]);
  useEffect(() => {
    const handleMoveCursor = (evt: MouseEvent) =>
      setPosition({ x: evt.clientX, y: evt.clientY });

    const timeout = setTimeout(() => {
      document.addEventListener("mousemove", handleMoveCursor);
    }, 100);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("mousemove", handleMoveCursor);
    };
  }, []);

  return (
    <AppWrapper>
      <Cursor position={postion} color="red" />
      {cursors.map((cursor) => {
        <Cursor
          key={cursor.id}
          position={cursor.postion}
          color={cursor.color}
        />;
      })}
    </AppWrapper>
  );
};

export default App;
