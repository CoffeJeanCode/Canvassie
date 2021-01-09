import React, { useEffect, useRef } from 'react';
import { useStore } from '../store';

type CursorProps = {
  color?: string;
};

const Cursor: React.FC<CursorProps> = ({ color }) => {
  const [{ x, y }] = useStore();

  let cursor = useRef<SVGSVGElement>(null);
  useEffect(() => {
    cursor.current?.setAttribute('style', `top: ${y}px; left: ${x}px`);
  }, [x, y]);

  return (
    <svg
      className="cursor"
      fill={color}
      ref={cursor}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M434.214 344.448L92.881 3.115C89.83.064 85.265-.832 81.254.811a10.667 10.667 0 00-6.592 9.856v490.667c0 4.459 2.773 8.448 6.976 10.005 1.195.448 2.453.661 3.691.661 3.051 0 6.037-1.323 8.085-3.733l124.821-145.6h208.427c4.309 0 8.213-2.603 9.856-6.592 1.664-3.99.747-8.555-2.304-11.627z" />
    </svg>
  );
};

export default Cursor;
