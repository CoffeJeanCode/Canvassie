import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  let cursor = useRef(null);

  useEffect(() => {
    const ball = cursor.current as any;

    let posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0,
      mouseHeight = 32,
      mouseWidth = 32;

    gsap.to(
      {},
      {
        duration: 0.016,
        repeat: -1,
        ease: 'power4.inOut',
        onRepeat: function () {
          posX += (mouseX - posX) / 6;
          posY += (mouseY - posY) / 6;

          gsap.set(ball, {
            css: {
              left: posX - mouseWidth / 2,
              top: posY - mouseHeight / 2,
              background: '#3bffad',
            },
          });
        },
      },
    );

    const updatePos = (e: MouseEvent) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
    };

    document.addEventListener('mousemove', updatePos);
  });

  return (
    <div
      className="cursor"
      style={{
        position: 'absolute',
        width: 32,
        height: 32,
      }}
      ref={cursor}
    ></div>
  );
};

export default Cursor;
