import styled from '@emotion/styled';
import React from 'react';

const BuildInfoContainer = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;

  font-weight: bold;
  font-size: 14px;
  color: white;
  text-shadow: 2px 2px 0 black;
`;

const BuildInfo: React.FC = () => {
  return (
    <BuildInfoContainer>
      Very Legitimate Windows 98
    </BuildInfoContainer>
  )
}

export default BuildInfo;