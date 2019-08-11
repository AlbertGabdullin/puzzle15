import React, { useEffect, useState } from "react";

const useTouchMovement = (moveTile: string => void) => {
  const [direction, setDirection] = useState({ moveDirection: "" });
  let touchStartX, touchStartY;

  const onTouchStart = e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  };
  const onTouchEnd = e => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const dX = touchEndX - touchStartX;
    const dY = touchEndY - touchStartY;

    const absX = Math.abs(dX);
    const absY = Math.abs(dY);

    if (Math.max(absX, absY) > 10) {
      const newDirection =
        absX > absY ? (dX > 0 ? "right" : "left") : dY > 0 ? "bottom" : "top";
      setDirection({
        moveDirection: newDirection
      });
    }
  };

  const onKeyDown = e => {
    let newDirection = "";
    const { keyCode } = e;
    switch(keyCode) {
      case 38:
      case 87:
        newDirection = 'top';
        break;
      case 40:
      case 83:
        newDirection = 'bottom';
        break;
      case 37:
      case 65:
        newDirection = 'left';
        break;
      case 39:
      case 68:
        newDirection = 'right';
        break;
      default:
        newDirection = '';
        break;
    }

    setDirection({ moveDirection: newDirection });
  };

  const listenEvents = () => {
    document.addEventListener("touchstart", onTouchStart);
    document.addEventListener("touchend", onTouchEnd);
    document.addEventListener("keydown", onKeyDown);
  };

  const removeEvents = () => {
    document.removeEventListener("touchstart", onTouchStart);
    document.removeEventListener("touchend", onTouchEnd);
    document.removeEventListener("keydown", onKeyDown);
  };

  useEffect(() => {
    listenEvents();
    return () => removeEvents();
  });

  useEffect(() => {
    moveTile(direction.moveDirection);
  }, [direction]);
};

const TouchHoc = ChildrenComponents => props => {
  const { moveTile } = props;
  useTouchMovement(moveTile);
  return <ChildrenComponents {...props} />;
};

export default TouchHoc;
