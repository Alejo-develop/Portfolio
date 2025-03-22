import React, { ReactNode } from "react";
import './background.css'

interface BackgroundGradientProps {
  children: ReactNode; 
}

const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  children,
}) => {
  return (
    <div
    className="background"
  >
      {children}
    </div>
  );
};

export default BackgroundGradient;
