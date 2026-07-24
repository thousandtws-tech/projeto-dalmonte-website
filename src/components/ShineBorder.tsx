import React from "react";

interface ShineBorderProps {
  children: React.ReactNode;
  borderRadius?: string;
  padding?: number;
  duration?: number;
  block?: boolean;
  style?: React.CSSProperties;
}

export const ShineBorder: React.FC<ShineBorderProps> = ({
  children,
  borderRadius = "999px",
  padding = 2,
  block = false,
  style = {},
}) => {
  return (
    <div
      className={`shine-wrap${block ? " shine-wrap-block" : ""}`}
      style={{ borderRadius, padding, ...style }}
    >
      <div className="shine-track" />
      <div
        className="shine-inner"
        style={{ borderRadius: `calc(${borderRadius} - ${padding}px)` }}
      >
        {children}
      </div>
    </div>
  );
};
