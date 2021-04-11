import styled from "@emotion/styled";
import React from "react";
import WindowBody from "../../desktop/window/WindowBody";
import WindowMenuBar from "../../desktop/window/menu/WindowMenuBar";
import WindowScrollResize from "../../desktop/window/WindowScrollResize";
import WindowMenuAccessKeyDropdown from "../../desktop/window/menu/WindowMenuAccessKeyDropdown";

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  overflow: scroll;
`

const NotepadApp: React.FC = () => {
  return (
    <>
      <WindowMenuBar>
        <WindowMenuAccessKeyDropdown title="File">
          Test Dropdown
        </WindowMenuAccessKeyDropdown>
      </WindowMenuBar>
      <WindowBody>
        <TextArea wrap="off" />
        <WindowScrollResize className="resize-point cursor-nwse-resize" />
      </WindowBody>
    </>
  )
}

export default NotepadApp;