import React from "react";
import VolumePopout from "./VolumePopout";

const VolumeIcon: React.FC = () => {
  const [ isOpen, setIsOpen ] = React.useState(false);


  return (
    <div className="relative">
      <div 
        title="Volume"
        className="icon-loudspeaker_rays_16"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        />

      {isOpen && (
        <VolumePopout />
      )}
    </div>
  );
}

export default VolumeIcon;