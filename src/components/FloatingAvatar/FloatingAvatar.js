import React, { useState, useEffect } from 'react';
import './FloatingAvatar.scss';
import { ReactComponent as CartIcon } from '../../assets/icons/View Cart CTA.svg';

function FloatingAvatar() {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const startDrag = (event) => {
    setIsDragging(true);
    setPosition({
      top: event.clientY - 25,
      left: event.clientX - 25,
    });
  };

  const doDrag = (event) => {
    if (!isDragging) return;
    setPosition({
      top: event.clientY - 25,
      left: event.clientX - 25,
    });
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', doDrag);
    window.addEventListener('mouseup', stopDrag);

    return () => {
      window.removeEventListener('mousemove', doDrag);
      window.removeEventListener('mouseup', stopDrag);
    };
  }, [isDragging]);

  return (
    <div className="floating-avatar" style={position} onMouseDown={startDrag}>
      <CartIcon />
    </div>
  );
}

export default FloatingAvatar;