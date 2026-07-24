import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";

interface ImageWithSkeletonProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  borderRadius?: string | number;
  containerHeight?: string | number;
}

export const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
  src,
  alt,
  className,
  style,
  borderRadius = "12px",
  containerHeight = "100%",
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: containerHeight,
        overflow: "hidden",
        borderRadius,
      }}
    >
      {!loaded && !error && (
        <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
          <Skeleton
            height="100%"
            borderRadius={
              typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius
            }
          />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        style={{
          ...style,
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.4s ease-in-out",
        }}
        {...props}
      />
    </div>
  );
};
