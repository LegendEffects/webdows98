import styled from "@emotion/styled";
import React from "react";
import { useSystem } from "../../../contexts/SystemContext";
import BuildInfo from "./BuildInfo";
import Window from "./window/Window";

const WindowContainer = styled.div`
  flex: 1 1 auto;
  flex-direction: column;
  position: relative;

  min-height: 100%;
  min-width: 100%;
`

const WindowArea: React.FC = () => {
  const [ system ] = useSystem();

  return (
    <WindowContainer>
      {system.windows.filter(window => window.visible === true).map((window) => (
        <Window key={window.uuid} window={window} />
      ))}

      <BuildInfo />
    </WindowContainer>
  )
}

export default WindowArea;