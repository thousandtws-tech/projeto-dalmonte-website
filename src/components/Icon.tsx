import React from "react";

interface IconProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Icon: React.FC<IconProps> = ({ name, className, style }) => {
  const props = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    style,
  };

  const paths: Record<string, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    check: <path d="m5 12 5 5 9-11" />,
    plus: (
      <>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </>
    ),
    spark: (
      <>
        <path d="M12 2v6" />
        <path d="M12 16v6" />
        <path d="M2 12h6" />
        <path d="M16 12h6" />
      </>
    ),
    presence: (
      <>
        <path d="M3 21V9l9-6 9 6v12" />
        <path d="M9 21v-9h6v9" />
      </>
    ),
    trust: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    custom: (
      <>
        <path d="M4 4h6v6H4z" />
        <path d="M14 14h6v6h-6z" />
        <path d="M14 4l6 6" />
        <path d="M10 14l-6 6" />
      </>
    ),
    safe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
    time: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    roi: (
      <>
        <path d="M3 17l6-6 4 4 7-7" />
        <path d="M14 8h6v6" />
      </>
    ),
    honest: (
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 8.5 8.5 0 0 1-7.6-4.5L3 21l3.5-1.4A8.5 8.5 0 1 1 21 11.5z" />
    ),
    warranty: (
      <>
        <circle cx="12" cy="9" r="6" />
        <path d="m8 14-2 8 6-3 6 3-2-8" />
      </>
    ),
    whats: (
      <>
        <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 8.5 8.5 0 0 1-7.6-4.5L3 21l3.5-1.4A8.5 8.5 0 1 1 21 11.5z" />
        <path d="M9 9c0 4 3 7 7 7" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
    ),
    pin: (
      <>
        <path d="M20 10c0 7-8 13-8 13S4 17 4 10a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    quote: (
      <>
        <path d="M6 9h4v6H4v-3a3 3 0 0 1 2-3z" />
        <path d="M16 9h4v6h-6v-3a3 3 0 0 1 2-3z" />
      </>
    ),
  };

  return <svg {...props}>{paths[name] || paths.arrow}</svg>;
};
