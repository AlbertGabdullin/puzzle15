// @flow
import React, { useEffect, useState } from 'react';
import type { GameMatrix } from '../types';

const useTouchMovement = (move: string => GameMatrix) => {
  const [direction, setDirection] = useState({ moveDirection: '' });
  let touchStartX;
  let touchStartY;

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
      let newDirection = '';
      if (absX > absY) {
        newDirection = dX > 0 ? 'right' : 'left';
      } else {
        newDirection = dY > 0 ? 'bottom' : 'top';
      }

      setDirection({
        moveDirection: newDirection,
      });
    }
  };

  const onKeyDown = e => {
    let newDirection = '';
    const { keyCode } = e;
    switch (keyCode) {
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
    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('keydown', onKeyDown);
  };

  const removeEvents = () => {
    window.removeEventListener('touchstart', onTouchStart);
    window.removeEventListener('touchend', onTouchEnd);
    window.removeEventListener('keydown', onKeyDown);
  };

  useEffect(() => {
    listenEvents();
    return () => removeEvents();
  });

  useEffect(() => {
    move(direction.moveDirection);
  }, [direction]);
};

type Props = {
  move: string => GameMatrix,
};

const TouchHoc = (ChildrenComponents: React$ComponentType<any>) => (
  props: Props,
) => {
  const { move } = props;
  useTouchMovement(move);
  return <ChildrenComponents {...props} />;
};

export default TouchHoc;
