import styled from "@emotion/styled";
import React from "react";
import { useUser } from "../../../../../contexts/UserContext";

const VolumePopoutContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  user-select: none;
  transform: translateY(-90%) translateX(-100%);

  background: var(--surface);
  box-shadow: var(--border-window-outer);

  padding: 15px 0;

  height: 100px;
  width: 78px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  text-align: center;
`

const VolumePopout: React.FC = () => {
  const [ { volume }, userDispatch ] = useUser();


  return (
    <VolumePopoutContainer>
      <label>Volume</label>

      <div className="is-vertical" style={{transform: 'translateY(50%) translateX(-7px)'}}>
        <input 
          className="has-box-indicator"
          type="range" 
          min="0" 
          max=".75" 
          step=".01" 
          style={{width: 65}}
          value={volume} 
          onChange={(e) => {
            userDispatch({ type: 'SET_VOLUME', value: e.target.valueAsNumber });
          }}
          />
      </div>
    </VolumePopoutContainer>
  )
}

export default VolumePopout;