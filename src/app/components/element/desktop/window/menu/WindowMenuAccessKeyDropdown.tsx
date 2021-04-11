import React from "react"
import WindowMenuAccessKey from "./WindowMenuAccessKey";

export interface WindowMenuAccessKeyDropdownProps {
  title: string;
}

const WindowMenuAccessKeyDropdown: React.FC<WindowMenuAccessKeyDropdownProps> = ({ title }) => {
  const [ isOpen, setIsOpen ] = React.useState(false);

  return (
    <>
      <WindowMenuAccessKey 
        className={isOpen ? 'active' : undefined}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        >
          {title}
      </WindowMenuAccessKey>
    </>
  )
}

export default WindowMenuAccessKeyDropdown;