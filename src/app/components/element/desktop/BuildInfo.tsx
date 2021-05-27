import styled from '@emotion/styled';
import React from 'react';

const BuildInfoContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;

  font-weight: bold;
  font-size: 14px;
  color: white;
  text-shadow: 2px 2px 0 black;

  user-select: none;
`;

const BuildInfo: React.FC = () => {
  return (
    <BuildInfoContainer>
      Very Legitimate Windows 98
    </BuildInfoContainer>
  )
}

export default BuildInfo;