import styled from "@emotion/styled";
import React from "react"
import Dropdown from "../../../global/dropdown/Dropdown";
import WindowMenuAccessKey from "./WindowMenuAccessKey";

export interface WindowMenuAccessKeyDropdownProps {
  title: string;
}

const WindowMenuContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const WindowMenuAccessKeyDropdown: React.FC<WindowMenuAccessKeyDropdownProps> = ({ title, children }) => {
  const [ isOpen, setIsOpen ] = React.useState(false);
  const dropdown = React.useRef<HTMLDivElement>(null);

  return (
    <WindowMenuContainer
      onMouseLeave={(e) => {
        setIsOpen(false);
      }}
      >
      <WindowMenuAccessKey 
        className={isOpen ? 'active' : undefined}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        >
          {title}
      </WindowMenuAccessKey>

      {isOpen && (
        <Dropdown ref={dropdown}>
          {children}
        </Dropdown>
      )}
    </WindowMenuContainer>
  )
}

export default WindowMenuAccessKeyDropdown;