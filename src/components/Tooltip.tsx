import React, { memo } from 'react';

interface TooltipProps {
  text: string;
  x: number;
  y: number;
  visible: boolean;
}

const Tooltip: React.FC<TooltipProps> = memo(({ text, x, y, visible }) => {
  if (!visible || !text) return null;

  return (
    <div
      className="tooltip"
      style={{
        position: 'fixed',
        left: `${x + 12}px`,
        top: `${y - 8}px`,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      <div className="tooltip-content">
        {text}
      </div>
    </div>
  );
});

Tooltip.displayName = 'Tooltip';

export default Tooltip;
