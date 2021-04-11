import React from "react";

export interface QuickLaunchItemProps {
  icon: string;
}

const QuickLaunchItem: React.FC<QuickLaunchItemProps> = ({ icon }) => {
  return (
    <div
      style={{
        marginLeft: '7px'
      }}
      className={`icon ${icon}_16`}
    />
  );
}

export default QuickLaunchItem;