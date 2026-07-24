import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface SkeletonProviderProps {
  children: React.ReactNode;
  isDark?: boolean;
}

export const SkeletonProvider: React.FC<SkeletonProviderProps> = ({
  children,
  isDark = false,
}) => {
  return (
    <SkeletonTheme
      baseColor={isDark ? "#1a2130" : "#e2e8f0"}
      highlightColor={isDark ? "#2a3447" : "#f1f5f9"}
      borderRadius="12px"
      duration={1.5}
    >
      {children}
    </SkeletonTheme>
  );
};
