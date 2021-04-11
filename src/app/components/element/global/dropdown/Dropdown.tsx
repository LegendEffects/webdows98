import styled from "@emotion/styled";
import React from "react";

const DropdownContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 50;

  transform: translateY(100%);
  color: #000;

  width: 158px;
  background: var(--surface);
  box-shadow: var(--border-window-outer);
  padding: 1px;
`

const DropdownInner = styled.div`
  box-shadow: inset -1px -1px var(--button-shadow), inset 1px 1px var(--button-highlight);
  padding: 2px;
`

const Dropdown: React.FC = ({ children }) => {
  return (
    <DropdownContainer>
      <DropdownInner>
        {children}
      </DropdownInner>
    </DropdownContainer>
  )
}

export default Dropdown;