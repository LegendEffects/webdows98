import styled from "@emotion/styled";
import React from "react";

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  
  padding: 2px;

  .icon {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }

  &:hover {
    background: var(--dialog-blue);
    color: #fff;
  }
`;

// export default DropdownItem;

export interface DropdownItemProps {
  icon?: string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ children, icon }) => {
  return (
    <DropdownContainer>
      <div className={`icon ${icon && `${icon}_16`}`} />
      {children}
    </DropdownContainer>
  )
}

export default DropdownItem