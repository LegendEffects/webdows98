import React from "react";

export interface IconProps {
  icon: string;
  size: 16 | 32 | 48;
  
  className?: string;
}

const Icon = React.forwardRef<HTMLDivElement, IconProps>(({ icon, size, className }, ref) => (
  <div className={`icon ${icon}_${size} ${className}`} />
))

export default Icon;